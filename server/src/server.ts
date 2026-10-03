import "dotenv/config";

import app from "./app.js";
import { connectDatabase } from "./config/database.js";

const PORT = Number(process.env.PORT) || 5000;

async function startServer() {
  try {
    await connectDatabase();

    app.listen(PORT, "0.0.0.0", () => {
      console.log("");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("     MediaGuard AI API");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log(`✓ Port: ${PORT}`);
      console.log("✓ Health: /api/health");
      console.log("✓ Database connected");
      console.log("✓ Cloudinary configured");
      console.log("✓ Clerk configured");
      console.log(
        `✓ Environment: ${
          process.env.NODE_ENV || "development"
        }`
      );
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("");
    });
  } catch (error) {
    console.error(
      "Failed to start MediaGuard AI API:",
      error
    );

    process.exit(1);
  }
}

if (process.env.NODE_ENV !== "production") {
  startServer();
}

export default app;