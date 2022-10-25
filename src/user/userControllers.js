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

exports.readUsers = async (req, res) => {
  //always need both arguments even if only one is used
  try {
    const users = await User.find({});
    res.status(200).send({ user: users });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    await User.updateOne(
      { username: req.body.username },
      { [req.body.key]: req.body.value }
    );
    res.status(201).send({ message: "Successfully updated user." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ username: req.params.username });
    res.status(200).send({message: "User deleted."})
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
