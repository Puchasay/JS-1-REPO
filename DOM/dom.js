console.log(document.body.children)  //ini dalam benetuk HTML Collection, berupa HTML tags

console.log(document.body.children[0].children)  // ambil semua tags yg ada di dalam first tag inside body

console.log(document.body.children[0].children[5])  //ambil tag di posisi index 5 di dlm first tag inside the body

document.body.children[0].length  //checking brp bnyk html tags di dalam html tag dg index 0

//Ini ganti ke bentuk Array
console.log(Array.from(document.body.children))

document.querySelector("div");  //ambil first div selector di body

document.querySelectorAll("div");  //ambil semua tags div di dlm body, ini dlm bentuk nodelist (spt array)

let error = document.querySelector(".error");  //ambil tag ptama dg class error

document.querySelector("div.error");  //ambil div tag ptama dg class error

document.getElementsByClassName("error");  //ga perlu . di depan error kl pake object ini

document.getElementsByTagName("div");  //it returns HTML collection (bkn dlm bntuk array), jd g bisa pake forEach function

//document.querySelectorAll("p:nth.child(2)"); //ambil p tag ptama dg posisi index k-2 di dlm p tag

console.log(document.querySelector(".error").innerHTML);  //innerHTML showing all html tags inside the html body

console.log(document.querySelector("h1").innerText);  //cuma nunjukin text di dalam tag disebut

document.querySelector("div#try");  //select first div tag which has id try 

error.innerText = "I just changed it";   //ini ganti innehållet

error.innerText += "I just added a new sentence here"   //cm nambahin aja, ini sama spt append, dont use innerHTML. thats a big no no

error.textContent //get all the hiding tags also

document.querySelector("h1").parentElement; //select element di atas nya h1 tag (parent element)

document.querySelector("h1").nextElementSibling;  //get to the next sibling after the h1 tag which on same tree level

document.querySelector("h1").setAttribute("class", "now");  //To put an attribute inside tag h1

document.querySelector("img").getAttribute("src");   //Get the attribute src inside of img tag  

//klo ga ada attribute di dlm tag yg di pilih, it returns null

console.log(error.classList);  
error.classList.add("add");  //ga bs add ato remove sama class lg, ga akan change anything
error.classList.remove("remove");
error.classList.replace("dream", "dreamer");
error.classList.toggle("add");  //bisa add kl ga ada class nya di list, tp bs remove class kl ada nama class nya di dlm list


