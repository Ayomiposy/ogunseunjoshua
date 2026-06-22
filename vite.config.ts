import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts
    server: {
      entry: "server",
      // 👇 ADD THIS LINE RIGHT HERE TO OVERRIDE THE CLOUDFLARE DEFAULT
      preset: "vercel",
    },
  },
});
