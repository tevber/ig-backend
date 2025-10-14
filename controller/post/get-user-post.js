import { postModel } from "../../schema/post.schema.js";

export const getUserPosts = async (req, res) => {
  const params = req.params;
  const userId = params.userId;

  const posts = await postModel.find({ userId: userId });

  res.status(200).json(posts);
};
