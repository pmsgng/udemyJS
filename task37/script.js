'use strict';

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

console.log(btns);

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));  // class blue 
// console.log(btns[1].classList.add('red'));  // добавлен класс
// console.log(btns[0].classList.remove('blue')); // удалить класс blue
// console.log(btns[0].classList.toggle('blue')); // если элем есть - удалить, если элемента нет - добавить

// if (btns[1].classList.contains('red')) {    // если в кнопке есть класс red, то выведи в консоль 'red'
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});

// console.log(btns[0].className);  // устаревший метод !!! , возвращает строку с классами


//метод делегирования 
wrapper.addEventListener('click', (event) => {
    // if (event.target && event.target.classList.contains('blue')) {
    //     console.log('helllo');
    // }

    if (event.target && event.target.matches('button.red')) {
        console.log('helllo');
    }
});

// перебор псевдомассива без делегирования 
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('hihihihi');
//     });
// });

const btn = document.createElement('button');
// btn.classList.add('blue');
// wrapper.append(btn);

btn.classList.add('red');
wrapper.append(btn);