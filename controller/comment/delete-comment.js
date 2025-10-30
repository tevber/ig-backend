import { commentModel } from "../../schema/comment.schema.js";

export const deleteComment = async (req, res) => {
  const params = req.params;

  const commentId = params.commentId;

  const deleteComment = await commentModel.findByIdAndDelete(commentId);

  res.status(200).json(deleteComment);
};
