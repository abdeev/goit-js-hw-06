function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('#controls input');
const divEl = document.querySelector('#boxes');


function createBoxes(amount) {
  console.log(divEl);
  const arrayBoxes = [];
  let firstWidth = 30;
  let firstHeight = 30;
  for (let count = 0; count < amount; count += 1) {
    const elementBoxes = document.createElement('div')
    elementBoxes.style.width = `${firstWidth}px`;
    elementBoxes.style.height = `${firstHeight}px`;
    elementBoxes.style.backgroundColor = getRandomHexColor();
    elementBoxes.style.border = '1px solid black';
    firstWidth += 10;
    firstHeight += 10;
    arrayBoxes.push(elementBoxes);
    console.log(arrayBoxes);
  }
  divEl.append(...arrayBoxes);
  console.dir(divEl);
}
function destroyBoxes() {
  divEl.innerHTML = '';
}
btnCreateEl.addEventListener('click', () => {
  divEl.innerHTML = '';
  createBoxes(Number(inputEl.value));
})
btnDestroyEl.addEventListener('click', () => {
  console.log('del btn');
  destroyBoxes();
});