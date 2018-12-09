
let theNumber = Number(process.argv[2]);

// If you enter "parrot", no output is shown"
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + theNumber * theNumber);
} else {
    console.log("Hey. Why didn't you give me a number?");
}