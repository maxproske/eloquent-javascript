'use strict';

let sum = (a, b) => a + b;

// Is equivalent to
let sumExpression = function(a, b) {
    return a + b;
};

console.log(sum(1,2));
console.log(sumExpression(1,2));

// If there is only one parameter, omit parameter parenthesis
function doubleDeclaration(i) {
    return i*2;
}
let doubleExpression = function(i) {
    return i*2;
}
let doubleArrow = n => n * 2;

console.log(doubleArrow(1));

// Echo
let hello = () => console.log("Hello!");

hello();