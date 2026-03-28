import Media from "../models/mediaModel.js";

export const uploadMedia = async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0)
      return res.status(400).json({ message: "No files uploaded" });

    const saved = await Promise.all(
      req.files.map((file) =>
        Media.create({
          url: file.path, // Cloudinary URL
          publicId: file.filename, // Cloudinary public_id
          resourceType: file.mimetype.startsWith("video/") ? "video" : "image",
          uploadedBy: req.user?.id,
        }),
      ),
    );

    res.status(201).json({ success: true, media: saved });
  } catch (error) {
    next(error);
  }
};
