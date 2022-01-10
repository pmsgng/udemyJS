'use strict';

// 1)
let t = 1;                       // 1 

console.log(t++);             
// 2)
[ ] + false - null + true;    // NaN

console.log(null + true);

// 3)
let y = 1;  
let x = y = 2; 

alert(x);            // x = 2

// 4)
[] + 1 + 2;  // 12        []+1 = '1' , '1' + 2 = '12' 

alert('1'[0]); // нолевой индекс строки '1' и есть 1 

// 5)
2 && 1 && null && 0 && undefined ; // null - первое ложное (&& спотыкается на лжи)

// 6)
// есть ли разница между двумя выражениями? 
// !!(a && b) и (a && b) ?                       // true и false 

// 7) 
// что выведет код 
alert( null || 2 && 3 || 4);  // 4    && > ||   (или спотыкается на правде)

// 8)
let v = [1, 2, 3];
let d = [1, 2, 3]; 

console.log(v == d);  // false 

// 9)
alert(+'infinity'); // infinity (number)

// 10)
'Ёжик' > 'яблоко' ?   // false
// 11) 
console.log(0 || '' || 2 || undefined || true || false); // Первая истина - 2 , поэтому 2 
