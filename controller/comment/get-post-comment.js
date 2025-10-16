export const getPostComments = async (req, res) => {
  const postId = req.params.postId;
  const comments = await commentModel
    .find({
      post: postId,
    })
    .populate({
      path: "post",
      populate: { path: "user", select: "username profilePic" },
    })
    .populate("user", "username profilePic");

  res.status(200).json(comments);
};
