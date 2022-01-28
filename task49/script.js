'use strict';

const log = function(a,b, ...rest) {
    console.log(a,b,rest);
};

log('basic','rest','operator','usage');

function calcOrDuble(number, basis) {
    basis = basis || 2;
    console.log(number * basis);
};

calcOrDuble(3);