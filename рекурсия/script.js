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

