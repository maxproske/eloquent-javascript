'use strict';

let likes = console.log("likes birds");

let user = {
    name: "John",
    age: 30,
    [likes]: true,
};

console.log(user[likes]);

function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

user = makeUser("John", 30);
console.log(user.name);

console.log(user.noSuchProperty === undefined);
console.log("noSuchProperty" in user);

for (let key in user) {
    console.log(key);
}