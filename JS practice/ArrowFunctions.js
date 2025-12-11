const person1 = {
  name: "Ankush",
  age: 27,
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};

person1.greet();
// Output: Hello undefined

// 👉 Why?

// Arrow functions don’t have their own this.

// They capture this from the scope in which they were created (in this case, the global scope).

// In global scope, this.name is not person.name, so it prints undefined.

const person = {
  name: "Ankush",
  age: 27,
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

person.greet();
// Output: Hello Ankush

// 👉 Why?

// In normal functions, this depends on who calls the function.

// Here, person.greet() is called, so this refers to the person object.

// That’s why it correctly prints "Ankush".

// ✅ How to say this in an interview:

// “If I define a method with a normal function, this refers to the object that called it — in my example, person.

// But if I use an arrow function, this doesn’t bind to the object; it inherits this from its surrounding scope, which is usually global, so this.name becomes undefined.”

const person3 = {
  name: "Ankush",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello ${this.name}`);
    }, 1000);
  },
};

person3.greet();
// Output after 1s: Hello Ankush
// 👉 Why?

// The arrow function inside setTimeout doesn’t create its own this.

// It inherits this from the surrounding function (greet), where this = person.

// So it prints "Ankush" correctly.
