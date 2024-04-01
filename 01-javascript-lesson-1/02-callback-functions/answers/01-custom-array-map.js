/**
 * Implement your own version of the `Array.map` function
 * This function should take two arguments.
 * The first argument is the array to be mapped
 * and the second argument is the callback function.
 */

const myArray = [1, 2, 3, 4, 5];
const myCallback = (value) => value * 2;

function customMapFunction(arr, cb) {
  /** Your code here */
  const newArr = [];
  for (let i = 0; i < arr.length; i++) newArr.push(cb(arr[i]));
  return newArr;
  /** End code */
}

console.log(customMapFunction(myArray, myCallback)); // [2, 4, 6, 8, 10]

module.exports = { customMapFunction };
