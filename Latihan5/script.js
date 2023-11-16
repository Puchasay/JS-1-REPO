let password;
// password = "password"; // inte giltigt
// password = "pa$$wd"; // giltigt
// password = "pa$sword"; // giltigt
password = "p@*swd"; // giltigt
// password = "p@ssw%rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt
// password = "lolcats-are-funny"
// password = "$$$"


const specialChars = [
    "@",
    "$",
    "%",
    "*",
    "^",
    "<",
    ">",
    "?",
    "!",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "'",
  ];

let clickButton = document.querySelector("#button");
let valueEl = document.querySelector("#pass");
let getPassVal = valueEl.value;
//console.log(getPassVal);
let charCount = 0;



//Codes for catch the value on input field (password which user has input)
clickButton.addEventListener("click", () => {

    getPassVal = valueEl.value;
 
    //alert(`Your password ${getPassVal} is ......`); 
    console.log(getPassVal);
    console.log(getPassVal.length);


    specialChars.forEach(char => {
        console.log(`${char}`);
    
        let incChar = getPassVal.includes(char);
        console.log(incChar);
        //console.log(getPassVal);
    
        if (incChar) {
            charCount++;
            console.log(incChar);
        }
    
        /* let x = Boolean(incChar);
        console.log(x);  */
    })


    
//Codes for testing the passwords

    let alertEl = document.querySelector("#alert");

    if (getPassVal.length >= 16) {    
        alertEl.className = "alert alert-success";
        alertEl.innerText = `Your password is sooo loooooooooong`;
        // alertEl.innerHTML += `<div class="alert alert-success alert-dismissible fade show" role="alert">Your password is loooooong enough
        // <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="parentElement.style.display='none'"></button>
        // </div>`;  //Codes for updating the DOM after user has input their passwords
     
    } else if (getPassVal.length >= 12 && getPassVal.includes("-")) {
        alertEl.className = "alert alert-success";
        alertEl.innerText = `Your password is good enough`;
        // alertEl.innerHTML += `<div class="alert alert-success alert-dismissible fade show" role="alert">Your password is good enough
        // <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="parentElement.style.display='none'"></button>
        // </div>`;
     
    } else if (getPassVal.length >= 8 && charCount >= 1) {
        alertEl.className = "alert alert-primary";
        alertEl.innerText = `Your password is quite strong`;
        // alertEl.innerHTML += `<div class="alert alert-primary alert-dismissible fade show" role="alert">Your password is quite strong
        // <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="parentElement.style.display='none'"></button>
        // </div>`;
       
    } else if (getPassVal.length >= 6 && charCount >= 2) {
        alertEl.className = "alert alert-primary";
        alertEl.innerText = `Your password is really good and really strong`;
        // alertEl.innerHTML += `<div class="alert alert-primary alert-dismissible fade show" role="alert">Your password is really good and really strong
        // <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="parentElement.style.display='none'"></button>
        // </div>`;
      
    } else {
        alertEl.className = "alert alert-danger";
        alertEl.innerText = `Your password is sooo not valid!!!!!!`;
        // alertEl.innerHTML += `<div class="alert alert-danger alert-dismissible fade show" role="alert">Your password is not valid!!!!!!
        // <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="parentElement.style.display='none'"></button> 
        // </div>`;  //onclick="parentElement.style.display='none'"
    } 

    
   /*  let divElem = document.querySelector("#alert");

    let closeBtn = () => {
        divElem.style.display = "none";
    } */

   /*  let divEl = document.querySelector(".alert");
    let btnClose = document.querySelector(".btn-close");
    
     btnClose.addEventListener("click", () => {
        //e.target.parentElement.parentElement.style.display = "none";
        divEl.style.display = "none";
    }) */

   /*  let btnClose = document.querySelector(".btn-close");
    console.log(btnClose);

    btnClose.addEventListener("click", e => {
        e.target.remove();
        console.log("I clicked it");
    }) */

/* 
    let divBox = () => {

    } */

     
        //console.log(e.target.parentElement.parentElement); 

       /*  btnClose.addEventListener("click", () => {
        divEl.style.display = "none"; */
        //console.log(e.target.parentElement.parentElement);
        
    //divEl.target.remove();.
    //console.log(e);
// });
});




