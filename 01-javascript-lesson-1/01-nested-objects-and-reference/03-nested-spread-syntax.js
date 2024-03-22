const obj1 = { nestedObj: {} };
const obj2 = { ...obj1 };

obj1.nestedObj.property = "something new";

const areTheSameObject = obj1 === obj2;
const haveTheSamePropertyReference =
  obj2.nestedObj.property === obj1.nestedObj.property;

console.log(`areTheSameObject: ${areTheSameObject}.`);
console.log(`haveTheSamePropertyReference: ${haveTheSamePropertyReference}.`);
