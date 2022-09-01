// Створи змінну counterValue, в якій буде зберігатися поточне значення 
// лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй 
// значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const minusButton = document.querySelector('[data-action="decrement"]');
let counter = document.getElementById("value");
const plusButton = document.querySelector('[data-action="increment"]');

let counterValue = 0;

function minusClick() {
    counterValue -= 1;
    counter.textContent = counterValue;
}
function plusClick() {
    counterValue += 1;
    counter.textContent = counterValue;
}
minusButton.addEventListener("click", minusClick);
plusButton.addEventListener("click", plusClick);