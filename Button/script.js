

const btnEL = document.querySelector("button");

btnEL.addEventListener("click", () => {
    alert("Thats tickles");
})

document.querySelector("#inputNAme").value //this will return value which you inputed

document.querySelector("#inputNAme").value = "yayaya"  //isi di dalam input field


const inputNameEl = document.querySelector("#inputName");

btnSayHiEl.addEventListener("click", () => {
    const inputName = inputNameEl.value;
    alert(`Hi ${inputName} you just clicked the button!`);
})