const todoList = [];

// Initialize html
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  // Using for each instead of the method below

  todoList.forEach((todoObject, index) => {
    // Getting multiple variables from an object (Destructuring)
    const { name, dueDate } = todoObject;
    // Creating buttons and sorting them into grids
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button js-todo-delete-button">
      Delete
      </button>
    `;
    todoListHTML += html;
  });

  // for (let i = 0; i < todoList.length; i++) {
  //   const todoObject = todoList[i];
  //   // Getting multiple variables from an object (Destructuring)
  //   const { name, dueDate } = todoObject;
  //   // Creating buttons and sorting them into grids
  //   const html = `
  //     <div>${name}</div>
  //     <div>${dueDate}</div>
  //     <button onClick="
  //       todoList.splice(${i}, 1);
  //       renderTodoList();
  //     " class="delete-button">Delete</button>
  //   `;
  //   todoListHTML += html;
  // };

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

    // If genearting html, event listeners need to be added after button creation like so i.e with the delete button as it's generated
    // All gets all the elements on the page with the class and adds an event listener with a for each
    // Closure, i.e a function always having access to something within scope, i.e index below
    document.querySelectorAll('.js-todo-delete-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        });
      });
};

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

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