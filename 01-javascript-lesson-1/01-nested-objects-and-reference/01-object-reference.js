const obj1 = {};
const obj2 = obj1;

obj1.property = "something new";

const areTheSameObject = obj1 === obj2;
const haveTheSamePropertyReference = obj2.property === obj1.property;

console.log(`areTheSameObject: ${areTheSameObject}.`);
console.log(`haveTheSamePropertyReference: ${haveTheSamePropertyReference}.`);
