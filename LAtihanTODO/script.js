/**
 * Simple Todos
 */

// Get references to DOM elements
const todolistEl = document.querySelector("#todolist");
const formCreateTodoEl = document.querySelector("#formCreateTodo");
const titleEl = document.querySelector("#newToDo");
//const x = document.querySelector("#inputNewToDoTitle");
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
	// Stop form from being submitted to the server
	// and causing a page reload
	e.preventDefault();
    //console.log("you click the submit button");


	// Get title from input-field
   
    const getTitle = titleEl.value;
    console.log(getTitle);

    if (!getTitle) {
        return;
    }

	// Abort if input is empty
   // titleEl.value ="";

	// Create a new todo-object
 let newElToDo = {
    title : getTitle,
    completed : false
 };
 console.log(newElToDo);

	// Add it to the todos-array

     todos.push(newElToDo);
     console.log(todos);

	// Render a representation of the
    

        //let newToAdd = liEl.append(`${newElToDo.title}`);
        
        //console.log(newToAdd);
   

	// updated todos-array
    renderTodos();
	// Finally, clear the input-field
    titleEl.value ="";
});

// Render a representation of the todos-array to the DOM
const renderTodos = () => {

    todos.forEach(todo => {
        const cssCompleted = todo.completed ? "completed" : "";
       let addLiEl = document.createElement("li");
        
        let liEl = todolistEl.appendChild(addLiEl);
        //let liEl = todolistEl.append(addLiEl)
        let addEl = liEl.append(`${todo.title}`);
        console.log(addEl);
        console.log(liEl);
        liEl="";
        //liEl.classlist.add("list-group-item");
        
        //or write like this:
       // liEl.innerHTML += `<li class = "list-group-item ${cssCompleted}">${todo.title}</li>`;
    })
 
	// Clear any existing listitems from the DOM
   // addEl.innerText=""
	// Loop over the todos-array and create a new
	// listitem for each todoitem
}

renderTodos();

// Render the initial representation of the todos-array