const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  },
  password: {
    type: String,
    required: true,
  },
});

//Allows to create own methods to perform on schema - in this case, findByCredentials
userSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({ username });
  console.log(user);
  if (user && bcrypt.compare(password, user.password)) {
    return user;
  } else {
    throw new Error();
  }
};

const User = mongoose.model("user", userSchema);

module.exports = User;
