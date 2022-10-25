const { Router } = require("express");
const { createUser, readUsers, updateUser, deleteUser } = require("./userControllers");

const userRouter = Router();

userRouter.post("/create", createUser);
userRouter.get("/read", readUsers);
userRouter.put("/update", updateUser);
userRouter.delete("/delete/:username", deleteUser);

module.exports = userRouter;
