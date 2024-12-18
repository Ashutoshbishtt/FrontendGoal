const wrapper = document.getElementById("todoContainer");
const addButton = document.getElementById("addButton");
const inputText = document.getElementById("inputFiled");

let todoList = [];

document.addEventListener("DOMContentLoaded", (e) => {
  const todoItems = JSON.parse(localStorage.getItem("todoList"));
  console.log(todoItems);
  todoList = todoItems === null ? [] : todoItems;
  todoItems?.forEach((todo) => {
    displayTodo(todo);
  });
});

addButton.addEventListener("click", (e) => {
  let text = inputText.value;
  let newTodo;
  if (text.trim().length !== 0) {
    newTodo = { todoText: text, completed: false, _id: Date.now() };
    todoList.push(newTodo);
  } else {
    return;
  }

  inputText.value = "";

  localStorage.setItem("todoList", JSON.stringify(todoList));

  displayTodo(newTodo);
});

function displayTodo(todo) {
  let singleTodo = document.createElement("div");
  singleTodo.setAttribute("class", "singleTodo");

  // Text container
  let text = document.createElement("div");
  text.setAttribute("class", "text");
  text.innerText = todo?.todoText;
  singleTodo.appendChild(text);

  // Edit buttons container
  let editButtons = document.createElement("div");
  editButtons.setAttribute("class", "editButtons");

  // Edit button
  let add = document.createElement("div");
  add.setAttribute("class", "add");

  let editIcon = document.createElement("i");
  editIcon.setAttribute("class", "fas fa-edit");
  editIcon.setAttribute("style", "color:#b197fc");
  add.appendChild(editIcon);
  editButtons.appendChild(add);

  editIcon.addEventListener("click", (e) => {
    // console.log("Hello");
    let todoText = todo.todoText;
    // console.log(todoText);

    text.removeChild()
  });

  // Completed button
  let completed = document.createElement("div");
  completed.setAttribute("class", "completed");

  let completeIcon = document.createElement("i");
  completeIcon.setAttribute(
    "class",
    todo.completed === false ? "fa-solid fa-check" : "fa-solid fa-x"
  );

  completed.addEventListener("click", () => {
    doneNotDone.call(todo);
  });

  completeIcon.setAttribute("style", "color:#b197fc");
  completed.appendChild(completeIcon);
  editButtons.appendChild(completed);

  // Delete button
  let deleteDiv = document.createElement("div");
  deleteDiv.setAttribute("class", "delete");

  deleteDiv.addEventListener("click", function () {
    deleteTodo.apply(todo);
  });

  let deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fa-solid fa-trash");
  deleteIcon.setAttribute("style", "color:#b197fc");
  deleteDiv.appendChild(deleteIcon);
  editButtons.appendChild(deleteDiv);

  // Append editButtons to singleTodo
  singleTodo.appendChild(editButtons);

  // Append singleTodo to wrapper
  wrapper.appendChild(singleTodo);
}

function deleteTodo() {
  newList = todoList.filter((todo) => {
    return todo._id !== this._id;
  });

  localStorage.setItem("todoList", JSON.stringify(newList));
  wrapper.innerHTML = "";
  todoList = newList;

  todoList.forEach((e) => {
    displayTodo(e);
  });
}

function doneNotDone() {
  this.completed = !this.completed;

  todoList.forEach((todo) => {
    if (todo._id == this._id) {
      todo.completed = this.completed;
    }
  });

  localStorage.setItem("todoList", JSON.stringify(todoList));

  wrapper.innerHTML = "";
  todoList.forEach((todo) => {
    displayTodo(todo);
  });
}
