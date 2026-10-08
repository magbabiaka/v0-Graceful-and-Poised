import { headers } from "next/headers"
import { checkBotId } from "botid/server"

export const HONEYPOT_FIELD = "website"
export const STARTED_AT_FIELD = "formStartedAt"

const MIN_FILL_TIME_MS = 3_000
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 3
const MAX_LINKS_IN_MESSAGE = 2

const URL_PATTERN = /(https?:\/\/|www\.|\b[a-z0-9-]+\.(com|net|org|ru|xyz|top|info|biz|io|co|link|click|site|online|shop)\b)/gi

const SPAM_PHRASES = [
  "seo",
  "backlink",
  "search engine optimization",
  "first page of google",
  "rank higher",
  "web design services",
  "website redesign",
  "lead generation",
  "crypto",
  "bitcoin",
  "forex",
  "casino",
  "viagra",
  "cialis",
  "loan offer",
  "guest post",
  "increase your traffic",
  "unsubscribe",
  "opt out",
  "telegram",
  "whatsapp me",
]
const SPAM_PHRASE_PATTERN = new RegExp(`\\b(${SPAM_PHRASES.map((p) => p.replace(/\s+/g, "\\s+")).join("|")})\\b`, "i")

const submissionsByIp = new Map<string, number[]>()

export type SpamCheckInput = {
  honeypot?: string | null
  startedAt?: string | number | null
  names: string[]
  subject?: string
  message?: string
}

export type SpamCheckResult = { ok: true } | { ok: false; reason: string; silent: boolean }

async function getClientIp() {
  const h = await headers()
  return h.get("x-real-ip") ?? h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (submissionsByIp.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  if (recent.length >= RATE_LIMIT_MAX) {
    submissionsByIp.set(ip, recent)
    return true
  }
  recent.push(now)
  submissionsByIp.set(ip, recent)
  return false
}

function looksLikeSpamContent({ names, subject = "", message = "" }: SpamCheckInput) {
  const hasUrl = (value: string) => new RegExp(URL_PATTERN.source, "i").test(value)

  for (const name of names) {
    if (name.length > 60 || hasUrl(name)) return "url-or-long-name"
  }
  if (hasUrl(subject)) return "url-in-subject"

  const linkCount = message.match(URL_PATTERN)?.length ?? 0
  if (linkCount > MAX_LINKS_IN_MESSAGE) return "too-many-links"

  if (SPAM_PHRASE_PATTERN.test(`${subject} ${message}`)) return "spam-phrase"
  if (/<a\s|\[url=|\[link=/i.test(message)) return "markup-links"
  return null
}

/**
 * Bots that trip a trap get a fake success (silent) so they don't learn to adapt.
 * Rate-limited humans get a visible message.
 */
export async function checkForSpam(input: SpamCheckInput): Promise<SpamCheckResult> {
  if (input.honeypot && input.honeypot.trim() !== "") {
    return { ok: false, reason: "honeypot", silent: true }
  }

  const startedAt = Number(input.startedAt)
  const elapsed = Date.now() - startedAt
  if (!Number.isFinite(startedAt) || elapsed < MIN_FILL_TIME_MS || elapsed > MAX_FORM_AGE_MS) {
    return { ok: false, reason: "timing", silent: true }
  }

  const verification = await checkBotId()
  if (verification.isBot) {
    return { ok: false, reason: "botid", silent: true }
  }

  const contentReason = looksLikeSpamContent(input)
  if (contentReason) {
    return { ok: false, reason: contentReason, silent: true }
  }

  const ip = await getClientIp()
  if (isRateLimited(ip)) {
    return { ok: false, reason: "rate-limit", silent: false }
  }

  return { ok: true }
}
