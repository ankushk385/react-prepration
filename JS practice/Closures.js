//A closure is when a function "remembers"
// the variables from its outer scope, even after the outer function has finished running.

function outerFunction() {
  let count = 0; // This variable is in the outer scope

  function innerFunction() {
    count++; // Inner function can access outer function's variable
    console.log("Count:", count);
  }

  return innerFunction; // Returning the inner function
}

const counter = outerFunction(); // `counter` now holds `innerFunction`

counter(); // Output: Count: 1
counter(); // Output: Count: 2
counter(); // Output: Count: 3
