const obj1 = {};
const obj2 = { ...obj1 };

obj1.property = "something new";

const areTheSame = obj2.property === obj1.property;

console.log(areTheSame);
