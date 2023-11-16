const ulEl = document.querySelector(".someList");
const liEl = document.querySelector(".list");

// ulEl.addEventListener("click", (e) => {
//     console.log(`You just clicked on ul element : ${e}`);
// })

liEl.addEventListener("click", (e) => {
    //e.stopPropagation
    e.target.classList.toggle("completed");
    console.log("You just clicked on li element :", e.target.tagName, e);
})

