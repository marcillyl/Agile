const User = require('../models/User');
exports.getOneUser = async (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json(error));
};
exports.updateOneUser = async (req, res) => {};
exports.deleteOneUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: '' });
  } catch (error) {
    res.status(500).send(error);
  }
};
