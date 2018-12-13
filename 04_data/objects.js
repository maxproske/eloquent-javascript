let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log("Squirrel today? " + day1.squirrel);

/**
 * Propeties whose names aren't valid have to be quoted
 */
let descriptions = {
    work: "Went to work.",
    "touched tree": "Touched a tree."
};
console.log(descriptions["touched tree"]);

/**
 * Remove the named property from the object
 */
delete descriptions.work;
// delete descriptions; // Does not work on objects themselves
console.log(descriptions);

/**
 * Using Object.keys() to list properties of an object
 */
console.log(Object.keys({x: 0, y: 1, z: 2}));

/**
 * Using Object.assign() to copy properties to another object
 */
let objectA = {a: 1, b: 2, c: 33};
Object.assign(objectA,{c:3, d: 4});
console.log(objectA);

/**
 * Arrays are just objects
 * ... and types are just strings
 */
let array = [1, 2, 3];
let type = typeof array;
console.log(typeof type);

let journal = [
    {events: ["work", "touched tree", "pizza",
                "running", "television"],
        squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
                "lasagna", "touched tree", "brushed teeth"],
        squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
                "beer"],
        squirrel: true},
    /* and so on... */
];

console.log(journal[0].events[0])