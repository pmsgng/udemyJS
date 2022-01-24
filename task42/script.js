'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

// const width = box.clientWidth;
// const hight = box.clientHeight;
// const width = box.offsetWidth;
// const hight = box.offsetHeight;
const width = box.scrollWidth;
const hight = box.scrollHeight;

console.log(width, hight);

btn.addEventListener('click', ()=> {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);

console.log(document.documentElement.scrollTop);