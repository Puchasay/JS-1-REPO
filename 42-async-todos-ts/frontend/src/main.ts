import {createTodo, fetchTodos} from './api';
import {NewTodo, Todos} from './types'

import "bootstrap/dist/css/bootstrap.css";
import './style.css';

const todolistEl = document.querySelector<HTMLUListElement>("#todolist")!;
const formCreateTodoEl = document.querySelector<HTMLFormElement>("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector<HTMLInputElement>("#inputNewTodoTitle");


let todos: Todos[] = [];  //This is an empty todos array with datatype Todos(the interface)


/*
* Get todos from server, update local copy and render Todos
*/
const getAndRenderTodos = async () => {
  try {
    todos = await fetchTodos();   //Filling the todos array with fetching the todos from backend storage by calling the fetchTodos function

    //Render the todos
    renderTodos();

  } catch (err) {
    alert("Could not get todos, try again later!!");
  }

}



/**
 * Render Todos to DOM
 */
const renderTodos = () => {
  todolistEl.innerHTML = todos  //this is todos from row 14 which is refers to interface Todos at row 8
    .map(todo => `
			<li class="list-group-item ${todo.completed ? 'completed' : ''}" data-todo-id="${todo.id}">
				<span class="todo-title" role="button">${todo.title}</span>
				<button class="ms-1 btn btn-danger btn-sm">🚮</button>
			</li>
		`)
    .join("");
}

// Listen for submit-events on the form
formCreateTodoEl?.addEventListener("submit", async (e) => {  //Kasih tanda ? disini
  // Stop form from being submitted to the server
  // and causing a page reload
  e.preventDefault();

  // Get title from input-field
  const newTodoTitle = inputNewTodoTitleEl?.value || "";   //Kasih tanda ? juga disini

  // Abort if input is empty
  if (newTodoTitle.length < 3) {
    alert("Thats not a todo");
    return;
  }

  // Create a new todo-object
  const newTodo: NewTodo = {  //Tambahin interface NEwTodo disini
    title: newTodoTitle,
    completed: false,
  }
  console.log("Will send newTodo to API:", newTodo);

  try {   //Put try-catch here inside submit eventlistener so that the user got notification if something wrong come up while creating a new Todo
  // POST todo to the API
  await createTodo(newTodo);

  // Get the updated list of todos from the API
  getAndRenderTodos();

  // Finally, clear the input-field
  if (inputNewTodoTitleEl) {
    inputNewTodoTitleEl.value = "";
  }
  } catch (err) {
    alert ("Could not create a todo, Please give the server a hug");
  }
});

getAndRenderTodos();
