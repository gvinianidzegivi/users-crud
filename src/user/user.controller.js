const UserService = require("./user.service");

const getUsers = (req, res) => {
  const data = UserService.getUsers();

  return res.json({
    data,
  });
};

const getUser = (req, res) => {
  const { id } = req.params;

  const data = UserService.getUser({ id });

  return res.json({
    data,
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  const message = UserService.deleteUser(id);

  return res.json(message);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const message = UserService.updateUser(id, payload);

  res.json(message);
};

const createUser = (req, res) => {
  const payload = req.body;
  const message = UserService.createUser(payload);

  return res.json(message);
};

const authUser = (req, res) => {
  const payload = req.body;
  const token = UserService.authUser(payload);
  return res.json(token);
};

module.exports = {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
  authUser,
};
