class TodoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  createTodo(todo) {
    if (todo.length == 0) return;
    todo = todo.trim().toCapitalized();
    return this.todoRepository.createTodo(todo);
  }

  getOneTodo(id) {
    return this.todoRepository.getOneTodo(id);
  }

  getAlltodos() {
    return this.todoRepository.getTodos();
  }
}

module.exports = TodoService;
