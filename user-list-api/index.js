const express = require("express");
const app = express();
const port = 3000;

const STATUS_OK = 200;
const STATUS_CREATED = 201;
const STATUS_NO_CONTENT = 204;
const STATUS_BAD_REQUEST = 400;
const STATUS_NOT_FOUND = 404;

app.use(express.json());

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

let users = [];

app.get("/users", (req, res) => {
  res.status(STATUS_OK).json(users);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    res.status(STATUS_OK).json(user);
  } else {
    res.status(STATUS_NOT_FOUND).json({ message: "Пользователь не найден" });
  }
});

app.post("/users", (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    return res
      .status(STATUS_BAD_REQUEST)
      .json({ message: "Не все обязательные поля заполнены" });
  }
  const id =
    users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
  const newUser = { id, name, email, age };
  users.push(newUser);
  res.status(STATUS_CREATED).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return res
      .status(STATUS_NOT_FOUND)
      .json({ message: "Пользователь не найден" });
  }

  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    return res
      .status(STATUS_BAD_REQUEST)
      .json({ message: "Не все обязательные поля заполнены" });
  }

  users[userIndex] = { id, name, email, age };
  res.status(STATUS_OK).json(users[userIndex]);
});

app.delete("/users/:id", (req, res) => {
  const USER_NOT_FOUND_MESSAGE = "Пользователь не найден";
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res
      .status(STATUS_NOT_FOUND)
      .json({ message: USER_NOT_FOUND_MESSAGE });
  }

  users.splice(userIndex, 1);
  res.status(STATUS_NO_CONTENT).send();
});

app.get("/users/age/:age", (req, res) => {
  const age = parseInt(req.params.age);
  const filteredUsers = users.filter((user) => user.age > age);
  res.status(STATUS_OK).json(filteredUsers);
});

app.get("/users/domain/:domain", (req, res) => {
  const domain = req.params.domain;
  const filteredUsers = users.filter((user) =>
    user.email.endsWith(`@${domain}`)
  );
  res.status(STATUS_OK).json(filteredUsers);
});

app.get("/users/sorted", (req, res) => {
  const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
  res.status(STATUS_OK).json(sortedUsers);
});
