import { postModel } from "../../schema/post.schema.js";

export const getPosts = async (req, res) => {
  const posts = await postModel.find().populate("userId");

  res.status(200).json(posts);
};
