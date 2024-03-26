async function givePromise(index) {
  const time = Math.random() * 3 * 1000;
  return new Promise((resolve) => setTimeout(() => resolve(index), time));
}

const myPromsArr = new Array(10).fill("").map((_, i) => givePromise(i));

Promise.any(myPromsArr).then((data) => {
  console.log(data);
});
