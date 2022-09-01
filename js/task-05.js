// Напиши скрипт, який під час набору тексту в 
// інпуті input#name - input(подія input), підставляє 
// його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися 
// рядок "Anonymous".

const inputWindow = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');
function repeatAfterUser(event) {
    if (event.target.value === "") { userName.textContent = "Anonymous" } else { userName.textContent = event.target.value; };
    console.log(event.target);
};
inputWindow.addEventListener("input", repeatAfterUser)