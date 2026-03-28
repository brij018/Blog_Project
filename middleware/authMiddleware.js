import jwt from "jsonwebtoken";
import HttpError from "./HttpError.js";

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return next(new HttpError("Not authorized", 401));

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    next(new HttpError("Invalid token", 401));
  }
};

export default protect;
