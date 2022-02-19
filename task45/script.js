'use strict';

// стандарты ES5 

// function User(name, id, age) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.age = age;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name + ' ' + this.id} ушёл`);
// };

// const ivan = new User('Ivan','20');
// const alex = new User('Alex','15');
// const dima = new User('DIma','10', '25')

// alex.hello();
// ivan.hello();
// ivan.exit();

// console.log(ivan,alex, dima);

class User2 {
    constructor(name,id) {
        this.name = name;
        this.id = id;
    }
    hello() {
        console.log(`Hello ${this.name + ' ' + this.id}`)
    }
    exit() {
        console.log(`User ${this.name} ${this.id} exit from server`)
    }
}

const petr = new User2('Petr','25');

console.log(petr);
petr.exit();
petr.hello();