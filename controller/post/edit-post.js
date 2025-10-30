import { postModel } from "../../schema/post.schema.js";

export const editPost = async (req, res) => {
  const params = req.params;
  const body = req.body;

  const postId = params.postId;

  const { caption } = body;

  const post = await postModel.findByIdAndUpdate(postId, { caption: caption });

  console.log(post);
};
