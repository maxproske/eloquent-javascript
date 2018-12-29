'use strict';

/**
 * Returns the sum of all object properties.
 * 
 * @param {Object} obj 
 * @return {int} sum
 */
function sum(obj) {
    let sum = 0;
    for (let prop in obj) {
        sum += obj[prop];
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

console.log(sum(salaries));