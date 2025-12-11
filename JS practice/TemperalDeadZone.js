console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization

let a = 10; // TDZ ends here

console.log(a); // ✅ Prints 10

console.log(b); // ❌ ReferenceError

const b = 20; // TDZ ends

console.log(b); // ✅ Prints 20

// Temporal Dead Zone (TDZ) in JavaScript
// The Temporal Dead Zone (TDZ) is the period
// between when a variable is declared using let
//  or const and when it is initialized, during
//  which accessing it results in a ReferenceError.
