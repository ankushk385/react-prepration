// 📌 Definition

// Shallow Copy: A copy where only the first level of the object is duplicated.
// If the object has nested objects (objects inside objects), they are still referenced, not copied.

// Deep Copy: A copy where the object and all nested objects are fully duplicated.
// Changes in the copy don’t affect the original at any level.

const person = {
  name: "Ankush",
  address: {
    city: "Delhi",
  },
};

// Shallow copy using spread
const shallowCopy = { ...person };

shallowCopy.name = "Vijay";
shallowCopy.address.city = "Mumbai";

console.log(person.name); // Ankush (unchanged ✅)
console.log(person.address.city); // Mumbai (changed ❌)

const person2 = {
  name: "Ankush",
  address: {
    city: "Delhi",
  },
};

// Deep copy using JSON method
const deepCopy = JSON.parse(JSON.stringify(person));

deepCopy.name = "Vijay";
deepCopy.address.city = "Mumbai";

console.log(person2.name); // Ankush (unchanged ✅)
console.log(person2.address.city); // Delhi (unchanged ✅)

// 👉 Explanation:

// JSON.stringify converts the object into a string.

// JSON.parse creates a new object from that string.

// So even nested objects are copied, and changes don’t affect the original.

// 📌 When to use

// Shallow copy is fine for simple objects with no nesting.

// Deep copy is needed when your object has nested structures
// (like address, orders, profile) and you want them truly independent.

// Interview-Safe Summary to Say:

// “A shallow copy only duplicates the top-level
// properties; nested objects still share references
// with the original. A deep copy duplicates everything,
// including nested objects, so the new object is completely independent.
// For example, using the spread operator {...obj} creates a shallow copy,
//  while using JSON.parse(JSON.stringify(obj)) creates a deep copy.”
