'use strict';
let num = 20;
function showFirstMessage(text) {
    console.log(text);
    console.log(num);                          //пример замыкания
} 

showFirstMessage('Hello World!');

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(5, 6));
// console.log(calc(4, 2));
// console.log(calc(15, 7));



function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

let logger = function() {
    console.log('Hello!');
};

logger();

// const calc = (a, b) => a + b;
const calc = (a, b) => {
    console.log('1');
    return a + b;
};