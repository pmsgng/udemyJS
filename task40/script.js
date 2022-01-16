'use strict';

// const now = new Date(2022, 1, 16, 20);

// const now = new Date(1642372643765);  // метод получения текущей даты 
// console.log(now);
const now = new Date();

// МЕТОД GET получает значение

// console.log(now.getFullYear());
// console.log(now.getMonth());  // отчет месяцев начинается 0, февраль это 1 месяц 
// console.log(now.getDate());   // отчет дней начинается с первого числа 
// console.log(now.getDay()); // отчет начинается с воскресенья , воскресенье это 0-ой день 
// console.log(now.getHours());
// console.log(now.getUTCHours());  


// console.log(now.getTimezoneOffset()); 
// console.log(now.getTime());   // дата отсчета с 1 января 1970 годв в милисекундах

// МЕТОД SET устанавливает значение

// console.log(now.setHours(1));
// console.log(now);

let start = new Date();

for (let i = 0; i < 10000000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`цикл отработал за ${end - start} милисекунд`);  // время действия кода 