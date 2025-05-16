import express, { Express } from "express";
import { createServer, Server } from "http";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import fs from "fs";

export function log(message: string, source = "express") {
  const time = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  console.log(`${time} [${source}] ${message}`);
}

// In dev mode, Vite handles serving the static files
export async function setupVite(app: Express, server: Server) {
  const { createServer: createViteServer } = await import("vite");
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });

  app.use(vite.middlewares);
}

// In prod mode, Express serves the static files
export function serveStatic(app: Express) {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const clientDir = resolve(__dirname, "../client");
  
  app.use(express.static(clientDir));
  
  app.get("*", (req, res) => {
    res.sendFile(resolve(clientDir, "index.html"));
  });
}
