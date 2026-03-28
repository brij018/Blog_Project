import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadMedia } from "../controllers/mediaController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/upload", protect, upload.array("files", 10), uploadMedia);

export default router;
