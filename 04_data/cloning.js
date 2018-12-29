'use strict';

let user = {
    name: "John",
    likes: {
        cats: true,
        dogs: false,
    }
}

let permissions = {
    canEdit: "true",
}

// Merge n objects together
Object.assign(user, permissions);

// Clone an object
// However, it will copy user.likes buy reference!!!
let clone = Object.assign({}, user);
console.log(clone.likes === user.likes);

// So will this!!!
let clone2 = {};
for (let key in user) {
    clone2[key] = user[key];
}
console.log(clone2.likes === user.likes);