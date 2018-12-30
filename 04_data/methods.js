'use strict';

let sayHi = (name) => console.log(`Hi, ${name}!`);

// Let's teach the user to say hello with methods
let user = {
    name: 'John',
    age: 30,
    sayHi() {sayHi(this.name)},
};

user.sayHi(); // → 'Hello!'

// Method shorthand
let user2 = {
    name: 'Jane',
    sayHi() {
        console.log(`Hi, ${this.name}!`)
    },
};

user2.sayHi();