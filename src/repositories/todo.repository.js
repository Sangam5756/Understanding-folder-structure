const todos = [];

class todoRepository {
  createTodo(todo) {
    todos.push({ id: todos.length, text: todo });
  }

  getOneTodo(id) {
    return todos.find((todo) => todo.id == id);
  }

  getAllTodos() {
    return todos;
  }
}

module.exports = todoRepository;
