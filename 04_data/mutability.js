let object1 = {value: 10};
let object2 = object1;  // === to object1
let object3 = {value: 10}; // different

/**
 * The object1 and object2 bindings grasp the same object
 */
console.log(object1 === object2);

/**
 * Whereas object3 does not.
 */
console.log(object1 === object3);

/**
 * Modifying object2 modifies object1.
 */
object2.value = 15;
console.log(object1.value);
console.log(object2.value);

/**
 * Strings are immutable
 */
let str = "I am an immutable value";
let otherStr = str.slice(8, 17);

/**
 * Same with arrays, since arrays are just objects
 */
let array1 = [1];
let array2 = array1;
let array3 = [1];

console.log(array1 === array2);
console.log(array1 === array3);

/**
 * They contain the same properties, but the identity is different!
 * JavaScript’s == operator compares by identity
 */
console.log(array1 == [1] || array3 == [1]);


const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
// score = {visitors: 1, home: 1};

console.log([1] == [1]);