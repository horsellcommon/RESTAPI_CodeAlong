const { Router } = require("express");
const { createUser, readUsers } = require("./userControllers");

const userRouter = Router();

userRouter.post("/create", createUser);
// userRouter.get("/read", readUsers);
//update
//delete

module.exports = userRouter;
