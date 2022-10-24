const User = require("./userModel");

exports.createUser = async (req, res) => {
  console.log(req);
  try {
    const newUser = await User.create(req.body);
    res.status(201).send({ user: newUser });
  } catch (error) {
    console.log(error);
    res.status(418).send({ error: error.message }); // 500 - server error, 418 - I am a teapot
  }
};
