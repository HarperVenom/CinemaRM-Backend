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
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  completed: [CompletedSchema],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
