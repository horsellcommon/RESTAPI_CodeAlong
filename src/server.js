require("./db/connection");
const express = require("express");
const userRouter = require("./user/userRouters");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json()); //send everything as JSON
app.use(userRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
