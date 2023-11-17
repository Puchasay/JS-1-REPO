/**
 * Simple Todos   INI YANG BENER
 */

// Get references to DOM elements
const todolistEl = document.querySelector("#todolist");
const formCreateTodoEl = document.querySelector("#formCreateTodo");
const titleEl = document.querySelector("#newToDo");

// List of todos
const todos = [
	{
		title: "Eat",
		completed: false,
	},
	{
		title: "Code",
		completed: true,
	},
	{
		title: "Sleep",
		completed: false,
	},
	{
		title: "Take over the world",
		completed: false,
	},
];

// Listen for submit-events on the form
 formCreateTodoEl.addEventListener("submit", (e) => {
	// Stop form from being submitted to the server and causing a page reload
	e.preventDefault();
    //console.log("you click the submit button");


	// Get title from input-field
    const getTitle = titleEl.value;
    console.log(getTitle);

    if (!getTitle) {
        return;  //ini maksudnya spt break;
    }

	// Abort if input is empty, kosongin input field stlh add thing todo yg baru
   titleEl.value ="";

	// Create a new todo-object
 let newElToDo = {
    title : getTitle,
    completed : false,
 };
 console.log(newElToDo);

	// Add it to the todos-array
     todos.push(newElToDo);
     console.log(todos);

	// Render a representation of the
    


	// updated todos-array
    renderTodos();
	// Finally, clear the input-field
  
   // todolistEl = "";
}); 

// Render a representation of the todos-array to the DOM

 const renderTodos = () => {

    todolistEl.innerText ="";  //kosongin text di li tag yg ada di dlm ul tag


    todos.forEach(todo => {
       let addClass = `list-group-item ${todo.completed}`;
        todolistEl.innerHTML += `<li class = "${addClass}">${todo.title}</li>`; //hrs pake += klo mau add smua listitem di ul, kl cm = nant cm 1 listitem yg kluar
        console.log(todo);
        console.log(addClass);
     //or add this inside first li tag   class ="${todo.completed}"
    })
}

renderTodos();
 
// Render the initial representation of the todos-array