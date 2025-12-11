const person = {
  name: "Ankush",
};

function greet(greeting, city) {
  console.log(greeting + " " + this.name + " from " + city);
}

// call → immediate, args one by one

greet.call(person, "Hello", "Delhi");
// Hello Ankush from Delhi

// apply → immediate, args in array

greet.apply(person, ["Hi", "Mumbai"]);
// Hi Ankush from Mumbai

// bind → returns new function

const newfun = greet.bind(person);
newfun("hiiiiiii", "bhatinda");
// Hey Ankush from Punjab

// "call and apply are used to invoke a function immediately while
// setting this explicitly — call takes arguments one by one, and apply takes them as an array.

// bind doesn’t run the function immediately, it gives me back
//  a new function with this permanently tied to the object I pass.

// In my example, I used a person object, and made sure
// this.name and this.age always refer to that object."

//******** */ this Explanation

// In normal functions, this refers to the object that calls the function.

// In arrow functions, this is taken from the surrounding scope (lexical binding)
//  and cannot be changed.
