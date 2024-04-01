/**
 * write a callback function that takes a single argument which is an object
 * return true if the object has a property called 'name' and the value of 'name' is a string
 * return false otherwise
 */

function isAPerson(obj) {
  /** Your code here */
  return obj.hasOwnProperty("name") && typeof obj.name === "string";
  /** End code */
}

const myMaybePeople = [
  { name: "John" },
  { naem: "Jane" },
  { nomen: "Jim" },
  { nombre: "Jill" },
  { identifier: "Jack" },
  { id: "Jen" },
  { someProperty: "Jeb" },
  { name: 1 },
  { name: true },
];

const people = myMaybePeople.filter(isAPerson);
console.log(people); // [{ name: "John" }]

module.exports = { isAPerson };
