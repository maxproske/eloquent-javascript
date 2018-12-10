/**
 * 1. Functions as values must be wrapped in braces, even 
 *    if it consists of only a single statement 
 */
let square = function(x) {
    return x * x;
};

console.log(`The square of 12 is ${square(12)}.`);

/**
 * 2. This is a function *declaration*
 */
function square_declaration(x) {
    return x * x;
}

/**
 * 3. Arrow function says "this input (the parameters) produces 
 *    this result (the body)"
 */
const square_arrow = (x) => {
    return x * x;
};

// I do the same thing!
const square_arrow_2 = x => x * x;

// I have no parameters
const horn = () => console.log("Toot");

// Continue: http://eloquentjavascript.net/03_functions.html#p_0M8AnI8lnL