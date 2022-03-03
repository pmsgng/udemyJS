'use strict';
//codewars
function reverseWords(str) {
    const newStr = str.split(' ').map((item) => item.split('').reverse().join('')).join(' ')
    return newStr;
}
console.log(reverseWords('Masha kakasha'));
//============

function getSum(a, b) {
    //Good luck!
    let aaa = 0;
    for (let i = 0; a < b; i++) {
        aaa += a;
        a++;
        console.log(aaa);
    }

    return aaa + b;

}
console.log(getSum(-1, 1))

//==============

function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return
    } else {
        return n * m
    }
}

paperwork(5, 5)

// ================
function simpleMultiplication(number) {
    // your code........
    if (number % 2 === 0) {
        return number * 8
    } else {
        return number * 9
    }
}
// =============

function highAndLow(numbers) {
    // ...
    const newNums = numbers.split(' ');
    let min = Math.min(...newNums)
    let max = Math.max(...newNums)
    return `${min} ${max}`
}

console.log(highAndLow('-9 -1 -2 -5 1 2 4 5 7 8 20 42'))

//=============
function makeUpperCase(str) {
    // Code here
    let newStr = str.toUpperCase();
    return newStr
}

console.log(makeUpperCase('sfhosafhasofiahf'))

//==============

function check(a, x) {
    // your code here
    if (a.indexOf(x) != -1) {
        return true;
    } else {
        return false;
    }
}
console.log(check([24, 12, 124, 10], 10));
console.log(check(['new', 'old', 'good', 'bad'], 'bad3'));

//================

function smash(words) {
    return words.join(' ');
}

//===========

function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    let num = Math.round(i);

    return num * 2;
}

//=========

function makeNegative(num) {
    // Code?
    if (num > 0) {
        return -num;
    } else if (num < 0 || num === 0) {
        return num;
    }
}

function newMakeNegative(num) {
    // Code?
    return num <= 0 ? num : -num;
}

// ================

function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

//================

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let mediumClassPoint = classPoints.reduce((sum, current) => {
        return sum + current;
    }) / classPoints.length; // среднее арифметичсекое всех оценок класса разделить на длину массива, 
    // получаем среднюю оценку класса

    return yourPoints > mediumClassPoint ? true : false;
}

//===============

function opposite(number) {
    //your code here
    return -number;
}

//===============

function sumMix(x) {
    let newArr = x.map(item => +item);
    let sumArr = newArr.reduce((sum, item) => sum + item);
    return sumArr;
}

//===========
const reverseSeq = n => {
    let newArr = [];
    for (let i = 1; i <= n; i++) {
        newArr.push(i);
    }
    let reverseArr = newArr.reverse();
    return reverseArr;
};

console.log(reverseSeq(5));

//=============
let summation = function (num) {
    // Code here
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    let sumArr = arr.reduce((sum, item) => sum + item);
    return sumArr;
};

console.log(summation(10));

//===================

function sortArray(array) {
    // Return a sorted array.
    const odd = array.filter(num => num % 2 !== 0).sort((a, b) => a - b); // sort(a - b) сорт отрицательных чисел
    console.log(`${odd} - отфильтрованный массив нечетных чисел`);
    let i = 0; //счетчик для перебора
    const newArr = [];

    array.forEach(item => {
        if (item % 2 === 0) {
            newArr.push(item);
            console.log(newArr);
        } else {
            newArr.push(odd[i]);
            i++;
            console.log(newArr);
        }
    });
    return newArr;
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// =====================

function isDivideBy(number, a, b) {
    // good luck
    return number % a === 0 && number % b === 0 ? true : false;
}

// =====================

var stringToNumber = function (str) {
    // put your code here

    return +str;
};

console.log(stringToNumber('12321313'));

//=============
function basicOp(operation, value1, value2) {
    // Code
    if (operation === '+') {
        return value1 + value2;
    } else if (operation === '-') {
        return value1 - value2;
    } else if (operation === '*') {
        return value1 * value2;
    } else if (operation === '/') {
        return value1 / value2;
    } else {
        console.log('недопустимое значение');
    }
}
console.log(basicOp('+', 4, 7));

function newBasicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
console.log(newBasicOp('+', 7, 7));

//==============
function grow(x) {
    return x.reduce((a, b) => a * b);
}
console.log(grow([1, 2, 3, 4, 5, 6]));

//=================
function duplicateEncode(word) {
    let newArr = [];
    let createArr = word.split('');
    console.log(createArr);
    // for(let i = 0; i <= createArr.length; i++) {
    //     createArr.forEach( item => {
    //        if(item !== createArr[i]) {
    //            return newArr.push('(');
    //        } else {
    //            return newArr.push(')');
    //        }
    //     });
    // }
    // return newArr;
    createArr.forEach(item => {
        if (item !== createArr[i]) {
            return newArr.push('(');
        } else {
            return newArr.push(')');
        }
    });
}
duplicateEncode('123');