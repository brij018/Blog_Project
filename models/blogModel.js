import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    coverImage: { type: String }, // Cloudinary URL
    mediaUrls: [{ type: String }], // Array of Cloudinary URLs
    tags: [{ type: String }],
  },
  { timestamps: true },
);

export default mongoose.model("Blog", blogSchema);
