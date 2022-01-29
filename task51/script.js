'use strict';

const persone = {
    name: 'Alex',
    tel: '+74444444',
    parents: {
        mom: 'Olga',
        dad: 'Petr',
    }
};

// console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));  // глубокое копирование объекта

clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);

const user = {
    userName: 'Alex',
    male: 'Man',
    friends: {
        friend: 'Anna',
    }
};

const newUser = {...user};   // спред оператор поверхностное копирование объекта

newUser.friends.friend = 'Petr';

console.log(user);
console.log(newUser);