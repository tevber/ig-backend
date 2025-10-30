import { userModel } from "../../schema/user.schema.js";

export const updateUserInfo = async (req, res) => {
  const body = req.body;

  const userId = req.user._id;

  const { bio, userName } = body;

  const updatedUser = await userModel.findByIdAndUpdate(
    userId,
    {
      bio,
      userName,
    },
    { new: true }
  );

  res.status(200).json(updatedUser);
};
