import { postModel } from "../../schema/post.schema.js";

export const deletePost = async (req, res) => {
  const params = req.params;

  const postId = params.postId;

  const post = await postModel.findByIdAndDelete(postId);

  res.status(200).json(post);
};
