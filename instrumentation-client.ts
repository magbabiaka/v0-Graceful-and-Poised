import { initBotId } from "botid/client/core"

// Server actions POST to the page path they're invoked from.
initBotId({
  protect: [
    { path: "/contact", method: "POST" },
    { path: "/booking", method: "POST" },
  ],
})
