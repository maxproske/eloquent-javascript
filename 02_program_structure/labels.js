'use strict';

// Sometimes we need to break out from multiple nested loops at once.
outer: for (let i = 0; i < 3; i++) {
    inner: for (let j = 0; j < 3; j++) {
        let input = console.log(`Value at coords (${i},${j})`);
        // what if I want to exit from here to Done (below)?
        break inner;
    }
}

// Does it worth with switch statements?
let i = 0;
mySwitch: switch (i) {
    case 0:
        break mySwitch;
        console.log("Made it!")
    default:
        break;
}

console.log('Done!');