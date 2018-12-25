'use strict';

// fnExpression(); // → ReferenceError: fnExpression is not defined
fnDeclaration();

// Visible everywhere
function fnDeclaration() {
    console.log("fnDeclaration");
}

let fnExpression = function() {
    console.log("fnExpression");
}

fnExpression();
fnDeclaration();

// visible();  // → ReferenceError: visible is not defined

if (false) {
    function visible() {
        console.log("visible");
    }
}