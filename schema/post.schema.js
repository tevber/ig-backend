import mongoose from "mongoose";
import { Schema } from "mongoose";

const PostSchema = new mongoose.Schema({
  caption: { type: String, required: true },
  likes: [{ type: Schema.Types.ObjectId, required: true }],
  images: { type: [{ type: String, required: true }], required: true },
  userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
  comment: [{ type: Schema.Types.ObjectId, required: false }],
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const postModel = mongoose.model("posts", PostSchema);
