import express from "express";
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import HttpError from "./middleware/HttpError.js";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";
import mediaRoutes from "./routes/mediaRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/blogs", blogRoutes);
app.use("/api/media", mediaRoutes);
app.use("/api/users", userRoutes);

app.use((req, res, next) => next(new HttpError("Route not found", 404)));
app.use((error, req, res, next) => {
  if (res.headersSent) return next(error);
  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "Internal server error" });
});

const port = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB();
    app.listen(port, () => console.log("Server running on port", port));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
startServer();
