import { userModel } from "../../schema/user.schema.js";

export const userPosts = async (req, res) => {
  const user = req.user;

  const params = req.params;
  const userId = params.userId;
  const posts = await userModel.find().populate(":userId");

  res.status(200).json(posts);
};
