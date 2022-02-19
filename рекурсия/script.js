'use strict';

//факториал 

let n = 1;
function fact(f) {
    if(f === 0) return;
    n = n * f;
    fact(f - 1);
}

fact(5);
console.log(n);

let num = 1;

function numRec() {
    num++;
    if(num >= 5) return;
    numRec();
};

numRec();

console.log(num);

// ==================

const item = document.querySelector('.block__item')
let position = 0;

item.addEventListener('click', () => {
    function animRec() {
        position++;
        if(position === 18) {
            position = 0;
            return item.style.left = 0;
            
        };
        item.style.left = position + 'rem';
        setTimeout(animRec,100);
    }
    animRec();
});

function fib(n) {
    return n <= 1 ? n : fib(n - 2) + fib(n - 1);
}
console.log(fib(6));

// ==================== замыкание с рекурсией колличество монет у попрошайки 

function randomIntegr(min,max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function createSumBeggarCoin(counter = 0) {
    let n = counter;
    return function sumBeggarCoin() {
        n += randomIntegr(0,100); 
        console.log(n);
        if (n >= 250) return;
        sumBeggarCoin();
    }
}
let beggar = createSumBeggarCoin();
let beggar2 = createSumBeggarCoin(200)

beggar();
console.log('---------------');
beggar2();