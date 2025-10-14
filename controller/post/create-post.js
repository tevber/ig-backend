import { postModel } from "../../schema/post.schema.js";

export const createPosts = async (req, res) => {
  const body = req.body;
  const user = req.user;
  const { images, caption } = body;
  const createdPost = await postModel.create({
    userId: user._id,
    caption,
    images,
  });

  res.status(200).json(createdPost);
};
