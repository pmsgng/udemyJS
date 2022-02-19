'use strict';

const log = function(a,b, ...rest) {
    console.log(a,b,rest);
};

log('basic','rest','operator','usage','big data');

function calcOrDuble(number, basis = 2) {  // значение по умолчанию basis = 2, если не передан аргумент при вызове функции
    // basis = basis || 2;
    console.log(number * basis);
};

calcOrDuble(3);