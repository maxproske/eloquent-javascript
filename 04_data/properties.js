/**
 * These access the same properties
 */
let array = [2, 3, 5, 7, 11];
console.log(array.length);
console.log(array["length"]);

let doh = "Doh";
console.log(doh.toUpperCase());
console.log(doh["toUpperCase"]());