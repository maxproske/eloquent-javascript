'use strict';

let user = { name: 'John' };

// id is a new symbol
let id = Symbol(); // → Symbol()
// is is a symbol with the description 'id'
id = Symbol('id') // → Symbol(id)

// Will be unique even with the same description
let id2 = Symbol('id');

user[id] = "461974";
user[id2] = "Codename Eagle"

console.log(user);
console.log(user[id]);
console.log(user[id2]);

// Symbols are skipping in for..in loops
for (let prop in user) {
    console.log("obj[prop]: " + user[prop]);
} 