

/**
 * TypeScript Todos
 *
 * Steg 1
 * Lägg till funktionalitet för att radera en todo (antingen med findIndex/splice)
 * eller array-filter
 *
 * Steg 2
 * Lägg till funktionalitet så man kan skapa en ny todo med hjälp av formuläret
 * `formCreateTodoEl` och input-elementet `formCreateTodoEl`.
 *
 */

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const todolistEl = document.querySelector<HTMLUListElement>("#todolist")!;
const formCreateTodoEl = document.querySelector<HTMLFormElement>("#formCreateTodo");
const inputNewTodoTitleEl = document.querySelector<HTMLInputElement>("#inputNewTodoTitle");

interface Todo {
	id: number
	title: string
	completed: boolean
}

const todos: Todo[] = [
	{ id: 1, title: "Wake up", completed: true },
	{ id: 2, title: "Drink coffee", completed: true },
	{ id: 3, title: "Code", completed: false },
	{ id: 4, title: "Sleep", completed: false },
];

const renderTodos = () => {
	todolistEl.innerHTML = todos
		.map(todo => `
			<li class="list-group-item ${todo.completed ? 'completed' : ''}" data-todo-id="${todo.id}">
				<span class="todo-title" role="button">${todo.title}</span>
				<button class="ms-1 btn btn-danger btn-sm">🚮</button>
			</li>
		`)
		.join("");
}

todolistEl.addEventListener("click", (e) => {
	console.log("You clicked, wow", e.target);
	const target = e.target as HTMLElement;

	if (target.tagName === "SPAN") {
		// toggle todo

		// get id of todo
		const todoId = Number(target.parentElement?.dataset.todoId); // data-todo-id=""

		// find the todo with the id
		const clickedTodo = todos.find(todo => todo.id === todoId);
		//                 ^?

		// toggle the todo
		if (clickedTodo) {
			// clickedTodo will always be of type `Todo` here and not `Todo | undefined` as otherwise the expression would evaluate to false
			clickedTodo.completed = !clickedTodo.completed
			//               ^?
		}

		// re-render the todos list
		renderTodos();

	} else if (target.tagName === "BUTTON") {
		// delete todo
		const todoId = Number(target.parentElement?.dataset.todoId); // data-todo-id=""

		const clickedTodo = todos.find(todo => todo.id === todoId);

		const indexTodo = todos.indexOf(clickedTodo);

		console.log(indexTodo);
		console.log(todos);

		let sliceTodo = todos.splice(indexTodo, 1);
		console.log(sliceTodo);
		console.log(todos);

		renderTodos();

		//todos = todos.filter(todo => {todo.id !== todoId})  //lgs rubah todos object nya
	}
});

// const addNewTodoFunc = () => {
formCreateTodoEl?.addEventListener("submit", (e) => {
	e.preventDefault();
	// console.log(inputNewTodoTitleEl.value);
	const aNewTodo = inputNewTodoTitleEl?.value;
	console.log(aNewTodo);

	// let newTodoId = todos.reduce((maxId, todo) {
	// 	if (todo.id > maxId) {
	// 		return todo.id;
	// 	}
	// 	return maxId;
	// }, 0)  //ato codesyntax ini

	const allTodoIds = todos.map(todo => todo.id);
	console.log(allTodoIds);
	const maxAllTodoIds = Math.max(...allTodoIds);
	console.log(maxAllTodoIds);


	let newTodoObj = {
		id: maxAllTodoIds + 1,   //or newTodoId
		title: aNewTodo,
		completed: false,
	}

	todos.push(newTodoObj);
	console.log(todos);

	renderTodos();
})

// }

renderTodos();


//About localstorage
// localStorage.setItem("stuff", 42);
// localStorage.getItem("stuff");  //got "42"
// localStorage.getItem("moar"); //get null, ga ada
// localStorage.clear();  //hapus smua key

// localStorage.setItem("stuff", ["a", "b"]);
// json.parse(localStorage.getItem("stuff") || "[]");  //json.parse artiya dr json ke bkn json
