const obj1 = { nestedObj: {} };
const obj2 = JSON.parse(JSON.stringify(obj1));

obj1.nestedObj.property = "something new";

const areTheSame = obj1.nestedObj.property === obj2.nestedObj.property;

console.log(areTheSame);
