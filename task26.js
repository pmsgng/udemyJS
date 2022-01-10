'use strict';
// To string ----------------------------

// 1) 
console.log(typeof (String(5)));

// 2)
console.log(typeof (5 + '')); //string  -  при сложении со строкой будет строка
const num = 5;
console.log("https://vk.com/catalog/" + num); // catalog/5 
const fontSize = 26 + 'px';


// To number ------------------------------

// 1) 
console.log(typeof(Number("4")));  // number

// 2) 
console.log(typeof(+'5')); // number

// 3) 
console.log(typeof(parseInt('15px', 10)));  // 10 - десятичная система

let answer = +prompt('Поменяется тип данных на число?', '');

// To boolean 

// 0, '', null, undefined,NaN;  // false 

// 1)
let switcher = null;
if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean("4")));  // boolean

// 3)
console.log(typeof(!!"4444")); // boolean !! 

