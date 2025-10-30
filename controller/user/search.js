import { userModel } from "../../schema/user.schema.js";

export const search = async (req, res) => {
  const user = await userModel.find().populate("userName");
  res.status(200).json(user);
};
