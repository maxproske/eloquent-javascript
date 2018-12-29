'use strict';

/**
 * Returns if an object is empty
 * 
 * @param {object} obj contains an object
 * @return {boolean} returns empiness of object
 */
let isEmpty = (obj) => Object.keys(obj).length == 0;

let schedule = {};
console.log(isEmpty(schedule)); // -> true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // -> false