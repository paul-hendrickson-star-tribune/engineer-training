const myNumbers = [4, 1, -20, -7, 5, 9, -6];

const positiveNums = filterArr(myNumbers, (x) => x >= 0);

console.log(positiveNums);

function filterArr(arr, cb) {
  const myArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) myArray.push(arr[i]);
  }
  return myArray;
}
