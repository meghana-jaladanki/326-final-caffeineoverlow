"use strict";
const express = require("express");
let fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

// NEW: Add json and urlencoded middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("client/"));

let data = {};
let filename = "data.json";
let userID = 0;
data = JSON.parse(fs.readFileSync(filename));

// READ Endpoints
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/html/login.html"));
});

app.get("/menu", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/html/menu.html"));
});

app.get("/orders", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/html/orders.html"));
});

app.get("/options", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/html/options.html"));
});

app.get("/drink/view", (req, res) => {
  const drinkVal = req.query["ID"];
  for (let i = 0; i < data["drink"].length; ++i) {
    if (drinkVal === JSON.stringify(data["drink"][i].ID)) {
      console.log(data["drink"][i]);
      res.send(data["drink"][i]);
    }
  }
  res.send();
});

app.get("/orders/view", (req, res) => {
  const orderVal = req.query["ID"];
  for (let i = 0; i < data["orders"].length; ++i) {
    if (orderVal === JSON.stringify(data["orders"][i].ID)) {
      console.log(data["orders"][i]);
      res.send(data["orders"][i]);
    }
  }
  res.send();
});

app.get("/login", (req, res) => {
  res.send(JSON.stringify({ userID: userID }));
});

app.get("/logout", (req, res) => {
  console.log("Able to logout!");
  res.redirect("/");
});

app.post("/signup", (req, res) => {
  // Create a new user account
  let user = req.body.user;
  user["userID"] = userID;
  userID++;
  data["user"].push(req.body.user);
  let userVal = JSON.stringify(data);
  fs.writeFileSync(filename, userVal);
  console.log("A new user account was created!");
  res.send(JSON.stringify({ userID: userID }));
});

// CREATE Endpoints
app.post("/drink/new", (req, res) => {
  // Create a new drink
  data["drink"].push(req.body.drink);
  let drinkVal = JSON.stringify(data);
  fs.writeFileSync(filename, drinkVal);
  console.log("A new drink was created!");
  res.sendStatus(200);
});

app.post("/user/new", (req, res) => {
  // Create a new user account
  data["user"].push(req.body.user);
  let userVal = JSON.stringify(data);
  fs.writeFileSync(filename, userVal);
  console.log("A new user account was created!");
  res.sendStatus(200);
});

app.post("/orders/new", (req, res) => {
  // Create a new order
  data["orders"].push(req.body.orders);
  let ordersVal = JSON.stringify(data);
  fs.writeFileSync(filename, ordersVal);
  console.log("A new order was created!");
  res.sendStatus(200);
});

// UPDATE Endpoints
app.get("/orders/update", (req, res) => {
  console.log("Order info has been updated!");
  res.send();
});

// DELETE Endpoints
app.delete("/orders/:ID", (req, res, next) => {
  const delIndex = getIndexById(req.params.id, expressions);
  if (delIndex !== -1) {
    expressions.splice(delIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

app.delete("/user/:ID", (req, res, next) => {
  const delIndex = getIndexById(req.params.id, expressions);
  if (delIndex !== -1) {
    expressions.splice(delIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

app.get("*", (req, res) => {
  console.log(req.path);
  res.status(404).json({ message: "Unknown Request" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
