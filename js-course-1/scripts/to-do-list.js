const todoList = [];

// Initialize html
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // Getting multiple variables from an object (Destructuring)
    const { name, dueDate } = todoObject;
    // Creating buttons and sorting them into grids
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onClick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-button">Delete</button>
    `;
    todoListHTML += html;
  };

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
};

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;
  // Adds object values to the end of the array
  todoList.push({
    name: name,
    dueDate: dueDate
    // if property and name are the same
    // name
    // dueDate
  });
  // Clear textbox
  inputElement.value = '';
  // Display html
  renderTodoList();
}