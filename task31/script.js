'use strict';

const btns = document.querySelectorAll('button');

// btn.onclick = function () {
//     alert('Click');
// };

// btn.onclick = function () {
//     alert('Second Click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('mouseenter', (e) => {
//     console.log('Hover');
//     console.log(e.target);
//     e.target.remove();
// });

const overlay = document.querySelector('.overlay');

let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// btn.removeEventListener('click', deleteElement );
// overlay.addEventListener('click', deleteElement);

btns.forEach( item => {
    item.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});