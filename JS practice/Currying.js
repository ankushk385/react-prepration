// function testClosure(a) {
//   const innerFn = (b) => {
//     return a * b;
//   };

//   return innerFn;
// }

// const displayMul = testClosure(3);

// console.log(displayMul(5));

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(5)(6)(7));
