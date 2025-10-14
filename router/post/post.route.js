import express from "express";
import { getPosts } from "../../controller/post/get-posts.js";
import { createPosts } from "../../controller/post/create-post.js";
import { togglePostLike } from "../../controller/post/toggle-post-like.js";
import { authMiddleWare } from "../../middleware/auth-middleware.js";
import { getUserPosts } from "../../controller/post/get-user-post.js";

const postRouter = express.Router();

postRouter.get("/all-post", authMiddleWare, getPosts);
postRouter.get("/user-post/:userId", authMiddleWare, getUserPosts);
postRouter.post("/create", authMiddleWare, createPosts);
postRouter.post("/toggle-like/:postId", authMiddleWare, togglePostLike);

export default postRouter;
