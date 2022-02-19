'use strict';

// 1) !!! обычная функция: this без strict mode равен window, с strict mode будет равен undefined
// function showThis(a,b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         // console.log(this); // 2) !!! контекст у методов объекта будет сам объект
//         function shout() {
//             console.log(this); // простоя функция, а не метод объектабпоэтому контекст потерян
//         }
//         shout();
//     }
// };
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id; 
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello!' + this.name);
//     };
// }

// let ivan = new User('Ivan', 23);

// 3)!!! this в конструкторах и классах - это новый экземпляр объекта 

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);

// }

// const user = {
//     name: 'Jhon',
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(5));

// function double(num) {
//     console.log(this)
//     return this.num * num;
// }

// const double2 = double.bind({num: 2, age: '10'});
// console.log(double2(3));

//!!! 4) ручная привязка this -  call,apply,bind

const btn = document.querySelector('button');

btn.addEventListener('click', function(){ // контекст вызова теряется если () => {}, тогда используем (e) => {e.target}
    // console.log(this);
    this.style.backgroundColor = 'red';  
});

let obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num); // контекст вызова объект obj
        };
        say();
    }
};

obj.sayNumber();  // = 5, вызов метода 

// const double = (a) => {
//     return a * 2;
// };

const double2 = a => a * 2;
