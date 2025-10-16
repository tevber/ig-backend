import { userModel } from "../../schema/user.schema.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const body = req.body;
  const JWT_SECRET = "secret code?";
  const { password, userName, email } = body;
  const user = await userModel.findOne({
    email,
  });

  if (user) {
    const hashedPassword = user.password;
    const isValid = await compare(password, hashedPassword);
    if (isValid) {
      const accessToken = jwt.sign(
        {
          data: user,
        },
        JWT_SECRET,
        { expiresIn: "10h" }
      );
      res.json(accessToken);
    } else {
      res.status(404).json({ messsage: "password is incorrect" });
    }
  } else {
    res.status(404).json({ messsage: "register" });
  }
};
