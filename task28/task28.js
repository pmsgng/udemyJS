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