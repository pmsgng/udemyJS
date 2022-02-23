'use strict';
//codewars
function reverseWords(str) {
    const newStr = str.split(' ').map((item) => item.split('').reverse().join('')).join(' ')
    return newStr;
  }
console.log(reverseWords('Masha kakasha'));
//============

function getSum( a,b )
{
   //Good luck!
  let aaa = 0;
  for(let i = 0; a<b ; i++) {
      aaa += a;
      a++;
      console.log(aaa);
  }

  return aaa + b;
  
}
console.log(getSum(-1 , 1))

//==============

function paperwork(n, m) {
    if(n < 0 || m < 0){
        return
    } else {
      return n*m
    }
}

paperwork(5, 5)

// ================
function simpleMultiplication(number) {
    // your code........
    if(number % 2 === 0) {
        return number * 8
    } else {
        return number * 9
    }
}
// =============

function highAndLow(numbers){
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
    if(a.indexOf(x) != -1) {
        return true;
    } else { return false; }
  }
  console.log(check([24,12,124,10],10));
  console.log(check(['new','old','good','bad'],'bad3'));

//================

function smash (words) {
    return words.join(' ');
 }

 //===========

 function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    let num = Math.round(i);
    
    return num*2;
  }

  //=========

  function makeNegative(num) {
    // Code?
    if(num > 0) {
        return -num;
    } else if ( num < 0 || num === 0) {
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