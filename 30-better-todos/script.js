/**
 * Better Todos
 *
 */

// Get references to DOM elements
const todolistEl = document.querySelector("#todolist");
const formCreateTodoEl = document.querySelector("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector("#inputNewTodoTitle");
const doneTodos = document.querySelector("#doneTodos");

// List of todos
let todos = [
	{
		id: 1,
		title: "Learn basic JavaScript",
		completed: true,
	},
	{
		id: 2,
		title: "Learn Array Methods",
		completed: false,
	},
	{
		id: 3,
		title: "Take over the world",
		completed: false,
	},
];

const sortTodos = () => {
	// Sort todos by title
	todos.sort((a, b) => {
		// Support for international characters
		return a.title.localeCompare(b.title, "sv");
	});
}

// Listen for click-events on `#todolist` (the `<ul>`)
document.querySelectorAll("ul.todos").forEach(listEl => {

 	// Listen for click-events on the list
 	listEl.addEventListener("click", (e) => {
	// console.log("You clicked on either the whole list, or one of its children", e.target);

	if (e.target.tagName === "SPAN") {
		// User clicked on a SPAN element
		// console.log("The clicked todo's title is:", e.target.innerText);

		const parentEl = e.target.parentElement;
		const clickedTodoId = Number(parentEl.dataset.todoId);

		// Search todos for the todo with the title `clickedTodoTitle`
		const clickedTodo = todos.find(todo => {
			return (todo.id === clickedTodoId);
		});
		// console.log("Result from find:", clickedTodo);

		// If no todo was found, bail
		if (!clickedTodo) {
			console.log("Could not find todo with the clicked id:", clickedTodoId);
			// alert("Could not find todo with the clicked title!");
			return;
		}

		// Change (toggle) completed on the found todo
		clickedTodo.completed = !clickedTodo.completed;
		// console.log("Toggled completed on the clicked todo");
// clickedTodo.classlist.add
// 		if (clickedTodo.completed) {
// 			doneTodos.innerHTML += `<li>${todo.title}</li>`;
// 		}

		// Render updated todos
		renderTodos();

	} else if (e.target.tagName === "BUTTON") {
		// User clicked on a BUTTON element
		// console.log("DELETE ALL THE THINGS!!!!!!!!!!!!", e.target);

		// Get parent element (`<li>`) to the button
		const parentLiEl = e.target.parentElement;

		// From the parent elements POV, get the element with the class `.todo-title`
		const clickedTodoId = Number(parentLiEl.dataset.todoId);

		// Get the `.todo-title` elements innerText
		// const todoTitle = todoTitleEl.innerText;

		/*
		// Find index of todo in `todos` that has a matching title
		const index = todos.findIndex(todo => todo.title === todoTitle);
		// console.log("Found index of todo to remove by traversing a lot:", index);

		// Remove todo from todos by splicing
		todos.splice(index, 1);
		*/

		// Using filter to get all todos that are NOT matching the title of the
		// todo we want to remove
		todos = todos.filter(todo => todo.id !== clickedTodoId);

		// Render updated todos
		renderTodos();
	}
});
});

// Listen for submit-events on the form
formCreateTodoEl.addEventListener("submit", (e) => {
	// Stop form from being submitted to the server
	// and causing a page reload
	e.preventDefault();

	// Get title from input-field
	const newTodoTitle = inputNewTodoTitleEl.value;

	// Abort if input is empty
	if (newTodoTitle === "") {
		return;
	}

	// // Make sure we don't already have a todo with this title
	// // If we do, bail
	// // (we're not going to use this as we're going to learn about data-attributes)
	// const todoWithSameTitle = todos.find(todo => todo.title === newTodoTitle);
	// if (todoWithSameTitle) {
	// 	alert("That todo already exists!");
	// 	return;
	// }

	const maxId = todos.reduce((maxId, todo) => {
		if (todo.id > maxId){
			return todo.id;
		}
		return maxId;
	}, 0);

	// Create a new todo-object
	const newTodo = {
		id: maxId + 1,
		title: newTodoTitle,
		completed: false,
	}

	// Add it to the todos-array
	todos.push(newTodo);

	// Render a representation of the
	// updated todos-array
	renderTodos();

	// Finally, clear the input-field
	inputNewTodoTitleEl.value = "";
});

// Render a representation of the todos-array to the DOM
 const renderTodos = () => {
	// Sort our todos before rendering them
	sortTodos();

	// 😤 Clear any existing listitems from the DOM
	// todolistEl.innerText = "";

	
	

// Render the initial representation of the todos-array
//renderTodos(); 


//Steg 1 Delar 2 olika Todo Status till 2 olika ul element:



	//todolistEl.innerText = "";  //So it wont result double on ul element when we add a new todo

	todolistEl.innerHTML = todos
	.filter(todo => !todo.completed)
	.map(todo => {
		return `<li class="list-group-item" data-todo-id="${todo.id}">
		<span class="todo-title">${todo.title}</span>
		<button class="ms-1 btn btn-danger btn-sm">🚮</button>
	</li>`;
	})
	.join("");
	



doneTodos.innerHTML = todos
	.filter(todo => todo.completed)
	.map (todo => {
		// const cssCompleted = todo.completed ? "completed" : "";
		return `<li class="list-group-item completed" data-todo-id="${todo.id}">
			<span class="todo-title">${todo.title}</span>
			<button class="ms-1 btn btn-danger btn-sm">🚮</button>
		</li>`;
	})
	.join("");
}

renderTodos(); 




// if (todo.completed) {}
// }

//  doneTodos.innerHTML = doneRenderTodos;
//console.log(doneRenderTodos);

	
	//const cssCompleted = todo.completed ? "completed" : "";
/* if (todo.completed) {
	doneTodos.innerHTML = todos
	.map(todo => {
		return `<li class="list-group-item ${todo.completed}">
		<span class="todo-title">${todo.title}</span>
		<button class="ms-1 btn btn-danger btn-sm">🚮</button>
	</li>`;
	})
	.join(""); */
	// doneRenderTodos();
	// console.log(doneRenderTodos);
// };
// });

