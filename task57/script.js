'use strict';

//filter возвращает новый отфильтрованный массив

const names = ['Ivan','Dima','Ksenia','Vsevolod'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);

// map возвращает новый массив с измен>нным объектами массива 

const answers = ['IvAn', 'aNNa', 'Hello'];

const result = answers.map(item => item.toLowerCase());

console.log(result);

// every/some

const some = [4,'qwe','sjaoijfa'];  // some - есть ли в массиве число

console.log(some.some(item => typeof(item) === 'number'));

const every = [4,4,6]; // every - все ли элементы массива - числа?

console.log(every.every(item => typeof(item) === 'number'));

// reduce 

const arr = [4,5,1,6,3,8];

const res = arr.reduce((sum,current) => {  // sum = 0, current = перебираемый элемент массива
    return sum + current;
})

console.log(res);  // 27 

const arrString = ['Vlad','Dima','Slava'];

const resString = arrString.reduce((sum,current) => {  
    return `${sum} , ${current}`;
})

console.log(resString);     

// ================

const obj = {
    anna: 'persone',
    dima: 'persone',
    vasya: 'kat',
    sharik: 'dog',
}

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')  // [['anna','persone'], ['dima','persone']]
.map(item => item[0]) // ['anna', 'dima']

console.log(newArr);

