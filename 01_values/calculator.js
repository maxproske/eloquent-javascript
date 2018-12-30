'use strict';

let calculator = {
    // ... your code ...
    read(a, b) {
        this.a = +a;
        this.b = +b;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

calculator.read(5, 2);
console.log(calculator.sum());
console.log(calculator.mul());