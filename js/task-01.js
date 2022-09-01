// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в 
// ul#categories, тобто елементів li.item.

// Для кожного элемента li.item у спику ul#categories,
//     знайде і виведе в консоль текст заголовку
// елемента(тегу < h2 >) і кількість елементів 
// в категорії(усіх < li >, вкладених в нього).

const elementIdCategory = document.querySelector('#categories');
const allElementsInCategory = elementIdCategory.querySelectorAll('li.item');
console.log(`Number of categories: ${allElementsInCategory.length}`);
console.log('');
// 1 Варіант

allElementsInCategory.forEach((el, idx, array) => {
    const headerEl = el.firstElementChild;
    const itemUl = headerEl.nextElementSibling.querySelectorAll('li');
    console.log(`Category: ${headerEl.innerText}`);
    console.log(`Count of elements: ${itemUl.length}`);
    console.log(' ');
});


// 2 Варіант
console.log("Інший варіант: ");
class Item {
    constructor(prevName) { 
    this.firstItem = prevName;
    this.itemFirstHeader = prevName.firstElementChild;
    this.liContent = this.itemFirstHeader.nextElementSibling.children;
    }
    getHeader() {
        return console.log(`Category: ${this.itemFirstHeader.innerText}`);
    }
    getElements() {
        return console.log(`Elements: ${this.liContent.length}`), console.log('');
    }
}

const firstItem = new Item(elementIdCategory.querySelector('li.item'));
firstItem.getHeader();
firstItem.getElements();

const secondItem = new Item(firstItem.firstItem.nextElementSibling);
secondItem.getHeader();
secondItem.getElements();

const thirdItem = new Item(secondItem.firstItem.nextElementSibling);
thirdItem.getHeader();
thirdItem.getElements();