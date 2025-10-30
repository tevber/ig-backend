import express from "express";
import { createComment } from "../../controller/comment/create-comment.js";
import { authMiddleWare } from "../../middleware/auth-middleware.js";
import { getPostComments } from "../../controller/comment/get-post-comment.js";
import { deleteComment } from "../../controller/comment/delete-comment.js";

const commentRouter = express.Router();

commentRouter.post("/create", authMiddleWare, createComment);
commentRouter.get("/get/:postId", authMiddleWare, getPostComments);
commentRouter.delete("/delete/:commentId", authMiddleWare, deleteComment);

export default commentRouter;
