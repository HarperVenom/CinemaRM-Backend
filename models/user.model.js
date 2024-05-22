const mongoose = require("mongoose");

const CompletedSchema = mongoose.Schema({
  universeId: {
    type: String,
    required: true,
  },
  titles: {
    type: [String],
  },
});

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  completed: {
    type: [CompletedSchema],
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
