import express, { NextFunction, Request, Response } from "express";
import { createServer } from "http";
import { log, setupVite, serveStatic } from "./vite";
import { registerRoutes } from "./routes";

const PORT = process.env.PORT || 5000;

async function startServer() {
  const app = express();
  app.use(express.json());
  
  const httpServer = await registerRoutes(app);

  // Error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    log(`Error: ${err.message}`, "express");
    res.status(500).json({ message: "Internal server error" });
  });

  if (process.env.NODE_ENV === "development") {
    // In development, Vite runs the React app
    await setupVite(app, httpServer);
  } else {
    // In production, serve the built React app
    serveStatic(app);
  }

  httpServer.listen(PORT, () => {
    log(`serving on port ${PORT}`, "express");
  });
}

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
