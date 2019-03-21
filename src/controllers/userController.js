const User = require('../models/userModel');

module.exports = {
  getUsers: async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
  },
  addUser: async (req, res) => {
    const user = await new User(req.body).save();
    res.status(200).json(user);
  }
};
