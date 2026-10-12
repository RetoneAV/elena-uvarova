import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  accountId: "a01234a62f889947b00f83bbb4eb8e4d",
  worker: defineWorker({
    name: "elena-uvarova",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-10-12",
    compatibilityFlags: ["nodejs_compat"],
    assets: { notFoundHandling: "none" },
    domains: ["euvarova.com", "www.euvarova.com"],
    env: {
      ASSETS: bindings.assets(),
    },
  }),
});
