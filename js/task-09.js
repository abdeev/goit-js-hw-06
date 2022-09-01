// Напиши скрипт, який змінює кольори фону
// елемента < body > через інлайн - стиль по 
// кліку на button.change - color і виводить 
// значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btnColorChangerEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color')

btnColorChangerEl.addEventListener('click', handlerColorChanger);
function handlerColorChanger() {
  const rndColor = getRandomHexColor();
  bodyEl.style.backgroundColor = rndColor;
  textEl.innerHTML = `${rndColor}`;
}