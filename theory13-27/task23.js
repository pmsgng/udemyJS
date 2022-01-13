'use strict';

const soldier = {
    health: 400,
    armor: 100,
    sayHellow: function() {
        console.log('Hello!');
    }
};

const soldierJhon = Object.create(soldier);  // метод create создает и копирует все свойства в новый объект
// const soldierJhon = {
//     health: 100,
// };

// старый метод !!! __proto__
// soldierJhon.__proto__ = soldier;   // наследует у soldier свойство armor по цепочке прототипов

//Object.setPrototypeOf(soldierJhon, soldier);  // совеременный метод 

console.log(soldierJhon.armor);
soldierJhon.sayHellow();