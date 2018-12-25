'use strict';

let i = 0; 
while (i <= 100) {
    console.log(i++);
}

for (;i<=200;) {
    console.log(i++);
}

// Do at least once
do {
    console.log(i++);
} while (i <= 100)