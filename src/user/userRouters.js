const { Router } = require("express");
const {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
} = require("./userControllers");
const { hashPass } = require("../middleware");

const userRouter = Router();

userRouter.post("/create", hashPass, createUser);
userRouter.get("/read", readUsers);
userRouter.put("/update", updateUser);
userRouter.delete("/delete/:username", deleteUser);

module.exports = userRouter;
