// classlist is just like classname of bootstrap which takes more classname rather than using single className
// bootstrap modal is used to update in pop which can edit and save the edit and then close that modlar in button click

//just getting the element from the html using queryselector
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

console.log(todoForm);
console.log(todoInput);

let todos = []; //here appended every todo
let todoId = "";

//
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // multiple value store after submit
  // specific todo ko lagi
  const todo = {
    id: Date.now(),
    name: todoInput.value,
    completed: false,
  };
  // add specific todo in the array so that the specific id object wont be replaced but added continuously
  // by using push method
  todos.push(todo);
  // console.log(todos);
  displayTodos();
  // each time input field must be empty to enter new data
  todoForm.reset();
});

// function to display todos in screen
const displayTodos = () => {
  todoList.innerHTML = ""; //every time new todoname will be added as like todo reset otherwise the previous todo also appears after adding new todo in todoList

  // to add todos array in ul
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "mb-1",
      "d-flex",
      "justify-content-between"
    );
    // append li on todolist->ul

    //*********************left div consists checkbox and list
    const leftDiv = document.createElement("div");

    // checkbox of the todo
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.classList.add("form-check-input", "me-2");
    // change event on checkbox which might be either true or false depending on the value of todo.completed
    // V.V.I.M.P
    // as we know when ever the onchange()  is triggered for all the input it gives value by e.target.value except for the input type checkbox
    checkbox.addEventListener("change", (e) => {
      e.preventDefault();
      todo.completed = e.target.checked;
      displayTodos(); //general practice of calling function to update after onchange triggered
    });

    // name of the todo in span element
    const span = document.createElement("span");
    span.innerHTML = todo.name;
    span.classList.add(
      "ms-2",
      `${todo.completed === true ? `text-decoration-line-through` : `none`}`
    );
    // after getting the e.target.checked as value we are going to add text-decoration-line-through in the todo.name after setting checkbox true

    // appending pert on the left div
    leftDiv.append(checkbox);
    leftDiv.append(span);
    li.append(leftDiv);

    //**********right div consists edit and delete button
    const rightDiv = document.createElement("div");
    // edit button
    const editButton = document.createElement("Button");
    editButton.classList.add("btn", "btn-primary", "btn-sm", "me-2");
    editButton.innerHTML = "EDIT";
    // modal part html mai modal ra button vako vaye siddai html ko modal butto ma hunthyo yo attribute but yeta set attribute
    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target", "#editModal");
    editButton.addEventListener("click", (event) => {
      event.preventDefault();
      // at first input field ma pailakai todo name aaunu paryo then only edit happens so todo.name is stored in the input field
      // edit input khali rakhdinu hunna
      document.querySelector("#newtodo").value = todo.name;
      todoId = todo.id;
    });

    // delete button
    const deleteButton = document.createElement("Button");
    deleteButton.classList.add("btn", "btn-danger", "btn-sm");
    deleteButton.innerHTML = "DELETE";
    // delete garda particular todo.id must be equal to the id stored in an array which is todos[]
    // remenber always use filter method to delete and filter in an array
    // eg: todo.id !==t.id here t is the param of todos array
    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();
      // then store ni garnu paryo filter vako kura so here we use todos = ...........
      todos = todos.filter((t) => {
        return todo.id !== t.id;
      });
      displayTodos(); //here also update granu pay sab so
    });

    rightDiv.append(editButton);
    rightDiv.append(deleteButton);
    li.appendChild(rightDiv);

    todoList.append(li);
  });
};

//when user click edit changes button in modal triggerred
const editTodoBtn = document.getElementById("edit-changes");
editTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //same id with changed value
  // const newName = document.getElementById("newtodo").value;
  // console.log(newName, todoId);
  const editedTodo = document.getElementById("newtodo").value;
  todos = todos.map((tt) => {
    return tt.id === todoId
      ? {
          id: tt.id,
          name: editedTodo,
          completed: todo.completed,
        }
      : tt;
  });
  displayTodos();
  document.getElementById("btn-close").click();
});
