/**
 * @param {number} num
 * @returns Promise<number>
 */
async function timesTwoAsync(num) {
  return new Promise((res) => res(num * 2));
}

/**
 * @param {number} num
 * @returns Promise<number>
 */
async function plusOneAsync(num) {
  return new Promise((res) => res(num + 1));
}

async function main() {
  const myNum = 1;

  const duplicated1 = await timesTwoAsync(myNum);
  const addedTo1 = await plusOneAsync(duplicated1);
  const duplicated2 = await timesTwoAsync(addedTo1);
  const addedTo2 = await plusOneAsync(duplicated2);
  const duplicated3 = await timesTwoAsync(addedTo2);
  const addedTo3 = await plusOneAsync(duplicated3);
  const duplicated4 = await timesTwoAsync(addedTo3);
  const result = await duplicated4;

  console.log(result);
}

main();
