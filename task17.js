'use strict';

const str = "test";
// const arr = [1, 2, 3];

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str);


const fruit = "Some Fruit"; 

console.log(fruit.indexOf('Fruit'));

const logg = 'Hello world!';

console.log(logg.slice(6, 12));  // world

console.log(logg.substring()); // не поддерживает отрицательные значения! 

console.log(logg.substr()); // устаревший метод 

const num = 12.2;
console.log(Math.round(num));  // 12 

const test = "12.2px";
console.log(parseInt(test));   // 12 
console.log(parseFloat(test));  // 12.2