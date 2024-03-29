const obj1 = { nestedObj: {} };
const obj2 = { ...obj1 };

obj1.nestedObj.property = "explicitly set";

modifyObject(obj2.nestedObj);

console.log(obj1.nestedObj.property === "explicitly set");

function modifyObject(someObj) {
  someObj.property = "in function";
}
