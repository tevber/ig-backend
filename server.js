import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./router/user/user.route.js";
import postRouter from "./router/post/post.route.js";
import dotenv from "dotenv";
import commentRouter from "./router/comment/comment.route.js";

dotenv.config();

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());
const connectToMongoDB = async () => {
  await mongoose.connect(process.env.MONGO_DB_URI);
};

connectToMongoDB();

app.use("/", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
