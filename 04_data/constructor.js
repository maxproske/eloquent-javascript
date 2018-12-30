'use strict';

function User(name) {
    // this = {}; (implicitly)

    if(!new.target) { // With or without "new"?
        return new User(name); // I will add new for you
    }
    this.name = name;
    this.isAdmin = false;
    
    // return this; (implicitly)
}

let user = new User("Jack");

// ..same as
let user = {
    name: "Jack",
    isAdmin: false,
}

console.log(user.name); // -> Jack