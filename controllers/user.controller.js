const User = require("../models/user.model");

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ id: id });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOneAndUpdate({ id: id }, req.body);
    if (!user) return res.status(404).json({ message: "User not found." });
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getUser, createUser, updateUser };
