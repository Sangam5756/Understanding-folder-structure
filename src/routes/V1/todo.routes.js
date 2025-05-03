const express = require("express");
const {
  getTodos,
  getTodo,
  createTodo,
} = require("../../controllers/todo.controller");
const { createTodoValidator } = require("../../validators/todo.validator");

const todoRouter = express.Router();

todoRouter.get("/", getTodos);
todoRouter.get("/:id", getTodo);
todoRouter.post("/", createTodoValidator, createTodo);

module.exports = todoRouter;
