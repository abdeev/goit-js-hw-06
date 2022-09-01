// Напиши скрипт, який реагує на зміну значення input#font - size
//     - control(подія input) і змінює інлайн - стиль span#text,
//         оновлюючи властивість font - size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputFontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
function onSliderMouseMove() {
    textEl.style.fontSize = `${inputFontSizeEl.value}px`;
}
inputFontSizeEl.addEventListener('input', onSliderMouseMove);