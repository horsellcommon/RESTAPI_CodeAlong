const { Router } = require("express");
const {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
  loginUser,
} = require("./userControllers");
const { hashPass, tokenCheck, comparePass } = require("../middleware");

const userRouter = Router();

userRouter.post("/create", hashPass, createUser);
userRouter.post("/login", comparePass, loginUser);
userRouter.post("/login", tokenCheck, loginUser);
userRouter.get("/read", readUsers);
userRouter.put("/update", updateUser);
userRouter.delete("/delete/:username", deleteUser);

module.exports = userRouter;
