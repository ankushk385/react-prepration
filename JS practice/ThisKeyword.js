//console.log(this); // In browser: Window object

//this keywords refers to the object that is executing the function
// and its value depends upon how the function is called

// const user = {
//   name: "John",
//   greet: function () {
//     console.log(`Hello, ${this.name}`); // 'this' refers to the user object
//   },
// };

// user.greet(); // Output: Hello, John

// const person = {
//   name: "Alice",
//   greet: () => {
//     console.log(this.name); // Arrow functions do NOT have their own `this`
//   },
// };

// person.greet(); // Output: undefined (or empty string in browser)

const obj = {
  name: "David",
  normalFunc: function () {
    console.log("Normal:", this.name); // ✅ 'this' refers to obj
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name); // ❌ 'this' refers to global object
  },
};

obj.normalFunc(); // Output: Normal: David
obj.arrowFunc(); // Output: Arrow: undefined

// ✅ Final Thoughts
// Normal functions have dynamic this (depends on the caller).
// Arrow functions inherit this from their lexical scope.
// For object methods, prefer normal functions to keep this referring to the object.
// For callbacks, use arrow functions to avoid unexpected this behavior.
