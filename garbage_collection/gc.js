'use strict';

// The global variable user references the object { name: 'John' }
let user = {
    name: 'John',
};

// When user is overwritten, the reference is lost
user = null;

// Now John becomes unreachable. 
// There's no way to access it, no reference to it.
