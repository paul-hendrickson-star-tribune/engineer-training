/**
 * Here is an example of a custom for loop that takes an array and a callback function
 * This is effectively a verbose, slow version of array.forEach()
 */

/**
 * @template T
 * @param {Array<T>} arr
 * @param { (arg: T)=> void } cb
 */

function forLoop(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

const myArr = [1, 2, 3, 4, 5];
const myCallback = (...arg) => console.log(...arg);

forLoop(myArr, myCallback);
