'use strict'; 

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button'); // HTML collection 
console.log(btns[2]);

const circles = document.getElementsByClassName('circle'); // HTML collection
console.log(circles);

const hearts = document.querySelectorAll('.heart'); // NodeList  тоже псевдомассив 

console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('div'); // возвращает первый элемент
console.log(oneHeart);

//============================================================
// Task 28  

box.style.backgroundColor = 'blue';
box.style.width = '500px';

const num = 100;
box.style.cssText = `background-color: gray; width: ${num}px;`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for ( let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'yellow';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'pink';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');  // ноды (узел)

div.classList.add('black');

document.body.append(div);

// document.querySelector('.wrapper').append(div);

const wrapper = document.querySelector('.wrapper');
// wrapper.appendChild(div); // старый метод !!!!!!
// wrapper.append(div);  // метод append вставляет элемент в конец родителя 
// wrapper.prepend(div);  // метод prepend вставляет элемент в начала родителя

// wrapper.insertBefore(div, hearts[0]); // вставляет элемент div перед элементом hearts[0]  (старый метод)!!!!!!!!
// hearts[0].before(div);  // перемещает элемент до
// hearts[0].after(div);   // перемещает элемент после

// wrapper.removeChild(hearts[1]); // удаление элементов старый метод !!!! 
// circles[0].remove();  // удаляет элемент со страницы  

// wrapper.replaceChild(circles[0], hearts[0]);  // замена элемента   старый метод !!!! 
// hearts[0].replaceWith(circles[0]);  // заменяет элемент на другой - replaceWith 


// div.textContent = "Hello!";  // только для текса всё переводит в строку 
div.innerHTML = '<h1>Hello wolrd!</h1>';

div.insertAdjacentHTML("beforebegin", '<h2>beforeBegin!</h2>');
div.insertAdjacentHTML('afterbegin', '<h2>afterBegin!</h2>');
div.insertAdjacentHTML('afterend', '<h2>afterEnd!</h2>');
div.insertAdjacentHTML("beforeend", '<h2>beforeEnd!</h2>');






