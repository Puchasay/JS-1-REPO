import {NewTodo, Todos} from './types'

export const createTodo = async (newTodo: NewTodo) => {  //TAmbah disini dg interface NewTodo dr row 14
  const res = await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTodo),
  });

  //Check that everything went ok
  if (!res.ok) {
throw new Error(`Could not create a todo! ${res.status}`);
  }
}


/** Fetch todos from API**/
export const fetchTodos = async () => {
  const res = await fetch("http://localhost:3001/todos");

  if (!res.ok) {
    throw new Error(`Could not fetch todos. Status code was: ${res.status}`); //with Throw the the function is already finished here
  }

  // const data = await res.json() as Todos[]; //Can write this or
  const data: Todos[] = await res.json();   //this

  return data;
}