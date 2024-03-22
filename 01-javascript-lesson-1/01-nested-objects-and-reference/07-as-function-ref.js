const obj1 = { nestedObj: {} };
const obj2 = { ...obj1 };

obj1.nestedObj.property = "something different";

modifyObject(obj2.nestedObj);

console.log(obj1.nestedObj.property === "something different");

function modifyObject(someObj) {
  someObj.property = "something new";
}
