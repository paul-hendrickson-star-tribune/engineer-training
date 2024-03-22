const objectToNest = {};
const obj1 = { nestedObj: objectToNest };
const obj2 = { nestedObj: objectToNest };

objectToNest.property = "something new";

const myString = "something new";
const areTheSame = obj1.nestedObj.property === myString;

console.log(areTheSame);
