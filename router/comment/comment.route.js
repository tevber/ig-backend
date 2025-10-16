import express from "express";
import { createComment } from "../../controller/comment/create-comment.js";
import { authMiddleWare } from "../../middleware/auth-middleware.js";
import { getPostComments } from "../../controller/comment/get-post-comment.js";

const commentRouter = express.Router();

commentRouter.post("/create", authMiddleWare, createComment);
commentRouter.get("/get/:postId", authMiddleWare, getPostComments);

export default commentRouter;
