'use strict';

// let a = 5; 
// let b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1,
// };

// const copy = obj; // ссылка 

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    i: 20,
};

// console.log(Object.assign(numbers, add));
// console.log(Object.assign({}, add));

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adsdada';
console.log(newArray);
console.log(oldArray);

const video = ['ytube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newArr = [... array];

const q = {
    one: 1,
    two: 2,
};

const newObj = {...q};



const o = {
    one: 1,
    two: 2,
    three: {
        four: 4,
        five: 5,
        six: {
            seven: 7,
        }
    }
};

const newO = {...o};

newO.three.six.seven = 4;
newO.one = 4;
console.log(newO);

console.log(o);
