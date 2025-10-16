import { userModel } from "../../schema/user.schema.js";

export const userPosts = async (req, res) => {
  const params = req.params;

  const userId = params.userId;

  const userData = await userModel.findById(userId);

  res.status(200).json(userData);
};
