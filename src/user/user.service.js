let store = require("./user");
const { v4: randomId } = require("uuid");

const getUser = (id) => store.find((user) => user.id === +id);
const getUserIndex = (id) => store.findIndex((user) => user.id === +id);
const getUserByEmail = (email) =>
  store.find(
    (user) => user.email.toLocaleLowerCase() === email.toLocaleLowerCase()
  );

const getUsers = ({ id }) => {
  const data = id ? getUser(id) || [] : store;
  return data;
};

const deleteUser = (id) => {
  const userIndex = getUserIndex(id);
  if (userIndex === -1) return { message: "User not found" };

  // if user index exists, delete it from DB.
  store = store.filter((user) => user.id !== +id);
  return { message: "User deleted" };
};

const updateUser = (id, payload) => {
  const userIndex = getUserIndex(id);
  if (userIndex === -1) return { message: "User not found" };

  // if user index exists, update it in DB.
  store[userIndex] = {
    id,
    ...payload,
  };

  return { message: "User updated" };
};

const createUser = (payload) => {
  const user = getUserByEmail(payload.email);

  if (user?.email) return { message: "User already exists" };

  // if user email not exists, add it in DB.
  store.push({ id: randomId(), ...payload });

  return { message: "CREATED" };
};

const authUser = (payload) => {
  const { email, password } = payload;

  const user = getUserByEmail(email);

  if (!user?.email) return { message: "Email is incorrect" };

  const isCorrectUser =
    user.email.toLowerCase() === email.toLowerCase() &&
    user.password === password;

  return isCorrectUser
    ? { token: randomId() }
    : { message: "Password is incorrect" };
};

module.exports = {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
  authUser,
};
