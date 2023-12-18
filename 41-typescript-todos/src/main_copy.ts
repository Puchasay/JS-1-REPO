import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const todolistEl = document.querySelector<HTMLUListElement>("#todolist")!; 
//tanda ! artinya ini bener ada value, bukan null value nya
//tanda <HTMLUListElement> utk ul dan li element

//Ini contoh hirarki dlm element:
// Element
//   HTMLElement
//     HTMLInputElement
//     HTMLUListElement


interface Todo {
  id: number
  title: string
  completed: boolean
  // due_date?: number //? artinya optional ato bisa tulis number | undefined
}

const todos: Todo[] = [     //pake Todo interface disini
  {id: 1, title: "Wake up", completed: true},
  // {id: 2, title: "Drink coffee", completed: true, due_date: 13},
  {id: 2, title: "Drink coffee", completed: true},
  {id: 3, title: "Code", completed: false},
  {id: 4, title: "Sleep", completed: false},
];

todolistEl.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;  //harus tulis gini dulu spy works

  if (target.tagName === "SPAN") {

  }

})