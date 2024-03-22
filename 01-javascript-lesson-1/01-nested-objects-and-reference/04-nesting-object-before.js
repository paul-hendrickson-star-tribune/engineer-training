const objectToNest = {};
const obj1 = { nestedObj: objectToNest };
const obj2 = { ...obj1 };

objectToNest.property = "something new";

const areTheSameObject = objectToNest === obj2.nestedObj;
const haveTheSamePropertyReference =
  objectToNest.property === obj2.nestedObj.property;

console.log(`areTheSameObject: ${areTheSameObject}`);
console.log(`haveTheSamePropertyReference: ${haveTheSamePropertyReference}`);
