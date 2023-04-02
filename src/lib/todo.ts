import ClickEvent = JQuery.ClickEvent;

interface Todo {
  id: number;
  body: string;
}

$(function () {
  const $todoForm = $('#todo-form');
  const $todoList = $('#todo-list');
  const $todoInput = $('#todo-form input');
  let todos: Todo[] = [];

  const TODOS_KEY = 'todos';

  if (localStorage.getItem(TODOS_KEY)) {
    const parsedTodos = JSON.parse(localStorage.getItem(TODOS_KEY) as string);
    todos.push(...parsedTodos);
    parsedTodos.forEach((todo: Todo) => {
      paintTodo(todo);
    });
  }

  function savedTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }

  function paintTodo(todo: Todo): void {
    const $li = $(
      `<li id='todo-${todo.id}' class='todo-item'>${todo.body}</li>`,
    );
    const $button = $('<button class="delete-btn">❌</button>');
    $button.on('click', handleDelete);
    $li.append($button);
    $todoList.append($li);
  }

  function handleDelete(event: ClickEvent): void {
    const $target = $(event.target);
    const $li = $target.parent();
    const id = $li.attr('id')?.split('-')[1];
    const newTodos = todos.filter((todo) => todo.id !== Number(id));
    todos = newTodos;
    savedTodo();
    $li.remove();
  }

  function incrementId(): number {
    if (todos.length === 0) {
      return 1;
    }
    return todos[todos.length - 1].id + 1;
  }

  function handleToDoSubmit(event: Event): void {
    event.preventDefault();
    const newTodo = {
      id: incrementId(),
      body: $todoInput.val() as string,
    };
    todos.push(newTodo);
    savedTodo();
    paintTodo(newTodo);
    $todoInput.val('');
  }

  $todoForm.on('submit', handleToDoSubmit);
});
