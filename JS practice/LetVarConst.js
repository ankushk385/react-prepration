//scope

function testVar() {
  if (true) {
    var x = 10; // Declared with var
  }
  console.log(x); // ✅ Works because var is function-scoped
}
// testVar();

function testLet() {
  if (true) {
    let x = 10; // Declared with var
  }
  console.log(x);
}
// testLet();

function testConst() {
  if (true) {
    const x = 10;
  }
  console.log(x);
}

// testConst();

//hoisting

function hoistingVar() {
  console.log(a);
  var a = 10;
  console.log(a);
}

// hoistingVar();

function hoistingLet() {
  console.log(a);
  let a = 10;
  console.log(a);
}

// hoistingLet();
function hoistingconst() {
  console.log(a);
  const a = 10;
  console.log(a);
}

// hoistingconst();

//Reassigning

function reassigningVar() {
  var b = 20;

  b = 10;
  console.log(b);
}
// reassigningVar();

function reassigningLet() {
  let b = 20;

  b = 10;
  console.log(b);
}
// reassigningLet();

function reassigningConst() {
  const b = 20;

  b = 10;
  console.log(b);
}
// reassigningConst();

//mutability of objects

const obj = { name: "Alice" };
obj.name = "Bob"; // ✅ Allowed: Object properties can change
console.log(obj); // { name: "Bob" }

obj = { age: 25 }; // ❌ TypeError: Assignment to constant variable.
