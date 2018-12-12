/* RangeError: Maximum call stack size exceeded */

function chicken() {
    return egg();
}

function egg() {
    return chicken();
}

console.log(chicken() + " came first.");