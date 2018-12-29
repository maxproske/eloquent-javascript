'use strict';

// Modify object in place
function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (!Number.isNaN(obj[prop])) {
            obj[prop] *= 2;
        }
    }
    return obj;
}

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

console.log(multiplyNumeric(menu));
