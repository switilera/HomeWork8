const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Пользователь не найден" });
  }
});

app.post("/users", (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    return res
      .status(400)
      .json({ message: "Не все обязательные поля заполнены" });
  }
  const id =
    users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
  const newUser = { id, name, email, age };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res
      .status(400)
      .json({ message: "Не все обязательные поля заполнены" });
  }

  users[userIndex] = { id, name, email, age };
  res.json(users[userIndex]);
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  users.splice(userIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

app.get("/users/age/:age", (req, res) => {
  const age = parseInt(req.params.age);
  const filteredUsers = users.filter((user) => user.age > age);
  res.json(filteredUsers);
});

app.get("/users/domain/:domain", (req, res) => {
  const domain = req.params.domain;
  const filteredUsers = users.filter((user) =>
    user.email.endsWith(`@${domain}`)
  );
  res.json(filteredUsers);
});

app.get("/users/sorted", (req, res) => {
  const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
  res.json(sortedUsers);
});
