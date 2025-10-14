import express from "express";
import { signup } from "../../controller/user/sign-up.js";
import { login } from "../../controller/user/login.js";
import { followUser } from "../../controller/user/follow-user.js";
import { authMiddleWare } from "../../middleware/auth-middleware.js";
import { userPosts } from "../../controller/user/profile.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/toggle-follow/:followedUserId", authMiddleWare, followUser);
userRouter.get("/profile/:userId", authMiddleWare, userPosts);

export default userRouter;
