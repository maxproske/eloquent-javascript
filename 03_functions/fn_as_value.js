'use strict';

// Declare function
let test = function () {
    console.log("Hello!");
};

// It's still a value, so we can work it it like other kinds of values
let hello = test;
hello(); // → Hello
test(); // → Hello

// Identity is equal
console.log(hello === test); // → true

// Callback functions
function ask(question, answer, yes, no) {
    console.log(question);
    if (answer == "y") yes();
    else no();
}

// Anonymous funtions
ask(
    "Do you agree?",
    "y",
    function () { console.log("You agreed."); },
    function () { console.log("You canceled the execution."); }
);