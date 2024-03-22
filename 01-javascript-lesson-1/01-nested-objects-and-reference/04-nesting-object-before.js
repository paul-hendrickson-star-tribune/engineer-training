const objectToNest = {};
const obj1 = { nestedObj: objectToNest };
const obj2 = { ...obj1 };

objectToNest.property = "something new";

const areTheSame = objectToNest.property === obj2.nestedObj.property;

console.log(areTheSame);
