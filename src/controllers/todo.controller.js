const TodoService = require("../services/todo.service");
const TodoRepository = require("../repositories/todo.repository");

const todoService = new TodoService(new TodoRepository());

function getTodos(req, res) {
  const todos = todoService.getAlltodos();
  res.status(200).json({
    todos: todos,
  });
}

function getTodo(req, res) {
  const id = req.params.id;

  const todo = todoService.getOneTodo(id);
  if (!todo) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }
  res.status(200).json({
    todo: todo,
  });
}

function createTodo(req, res) {
  const todo = req.body.todo;
  if (!todo) {
    return res.status(400).json({
      message: "Todo is required",
    });
  }
  todoService.createTodo(todo);

  return res.status(201).json({
    message: "Todo created successfully",
  });
}

module.exports = {
  getTodos,
  getTodo,
  createTodo,
};
