function giveMeStrings(cb) {
  const arr = ["a", "b", "c", "d", "e"];
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

const myCallback = (arg) => console.log(arg);

giveMeStrings(myCallback);
