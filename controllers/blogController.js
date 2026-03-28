import Blog from "../models/blogModel.js";
import HttpError from "../middleware/HttpError.js";

export const createBlog = async (req, res, next) => {
  try {
    const { title, body, tags, mediaUrls } = req.body;
    const coverImage = req.file?.path; // optional single cover image
    const blog = await Blog.create({
      title,
      body,
      tags,
      mediaUrls,
      coverImage,
      author: req.user.id,
    });
    res.status(201).json(blog);
  } catch (error) {
    next(error);
  }
};

export const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

export const getBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id).populate(
      "author",
      "name email",
    );
    if (!blog) return next(new HttpError("Blog not found", 404));
    res.json(blog);
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { _id: req.params.id, author: req.user.id },
      req.body,
      { new: true },
    );
    if (!blog)
      return next(new HttpError("Blog not found or unauthorized", 404));
    res.json(blog);
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findOneAndDelete({
      _id: req.params.id,
      author: req.user.id,
    });
    if (!blog)
      return next(new HttpError("Blog not found or unauthorized", 404));
    res.json({ message: "Blog deleted" });
  } catch (error) {
    next(error);
  }
};
