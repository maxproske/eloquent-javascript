let array = [1, 2, 3, 2, 1];

console.log(array.indexOf(2));
// → 1
console.log(array.lastIndexOf(2));
// → 3
console.log(array.slice(2));
// → [ 3, 2, 1 ]
console.log(array.slice(2,4));
// → [ 3, 2 ]

// Trim
console.log("    okay\r\r\r\r\r\n\n\n".trim());

let sentence = "The whale turns in the cold night.";
console.log(sentence.split(" "));