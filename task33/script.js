'use strict';

// touch 
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.touches);
        console.log(e.targetTouches);
        console.log(e.changedTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        // console.log('move');
        console.log(e.touches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });
});

// touches    список всех пальцев которые взаимодействуют с экраном
// targetTouches     все пальцы которые взаимодействуют с конкретным элементом
// changedTouches    список пальцев которые учавствуют в текущем событии 