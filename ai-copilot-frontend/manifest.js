// manifest.js

import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,

  name: "AI Browser Copilot",

  version: "1.0.0",

  description: "AI Browser Copilot",
  background: {
    service_worker: "src/background/serviceWorker.js",
    type: "module",
  },

  permissions: ["activeTab", "storage", "tabs", "scripting"],

  host_permissions: ["<all_urls>"],

  action: {
    default_title: "AI Browser Copilot",
    default_popup: "index.html",
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/content/domExtractor.js"],
    },
  ],
});
