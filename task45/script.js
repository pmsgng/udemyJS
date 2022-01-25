'use strict';

// стандарты ES5 

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`пользователь ${this.name} ушёл`);
};

const ivan = new User('Ivan','20');
const alex = new User('Alex','15');

ivan.exit();

console.log(ivan,alex);

ivan.hello();
alex.hello();