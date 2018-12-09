// Print 0 to 12
// for loop must contain two semicolons
for (let i = 0; i < 13; i += 2) {
    console.log(i);
}

// Print the square root of 10
let result = 1;
for (let i = 0; i < 10; i++) {
    result *= 2;
}
console.log("The square root of 10 is: " + result);

// Finds the first number that is both greater than or equal to 20 and divisible by 7.
for (let i = 20; i < 1000; i++) {
    if (i%7 == 0) {
        console.log("Found: " + i)
        break;
    }
}