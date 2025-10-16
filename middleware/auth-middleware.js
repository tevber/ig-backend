import jwt from "jsonwebtoken";

export const authMiddleWare = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new Error(" need auth header ");
  const accesstoken = authHeader.split(" ")[1];
  if (!accesstoken) throw new Error(" need accesstoken ");
  const user = jwt.verify(accesstoken, "secret code?");
  if (!user) throw new Error(" need user ");
  req.user = user.data;

  next();
};
