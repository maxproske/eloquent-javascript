/**
 * If you don’t provide it or pass the value undefined, 
 * exponent will default to 10.
 */
function power(base, exponent = 10) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(2));

console.log(power(2, 10));