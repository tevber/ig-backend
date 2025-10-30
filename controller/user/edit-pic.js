import { userModel } from "../../schema/user.schema.js";

export const editProfilePic = async (req, res) => {
  const params = req.params;
  const body = req.body;

  const userId = params.userId;

  const { profilePic } = body;

  const changedPic = await userModel.findByIdAndUpdate(userId, { profilePic });

  console.log(changedPic);

  res.status(200).json(changedPic);
};
