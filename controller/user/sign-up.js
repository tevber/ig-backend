import { userModel } from "../../schema/user.schema.js";
import { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const body = req.body;

    const { password, email, userName, fullName, bio } = body;
    const saltRounds = 10;
    const hashedPassword = await hash(password, saltRounds);

    const isExisting = await userModel.findOne({
      email,
    });
    const JWT_SECRET = "secret code?";
    if (isExisting) {
      res.status(400).json({ message: "email exists use another YOU LOSER" });
    } else {
      const createdUser = await userModel.create({
        userName,
        fullName,
        email,
        password: hashedPassword,
        bio,
      });
      const accessToken = jwt.sign(
        {
          data: createdUser,
        },
        JWT_SECRET,
        { expiresIn: "10h" }
      );
      res.json(accessToken);
    }
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Server error" });
  }
};
