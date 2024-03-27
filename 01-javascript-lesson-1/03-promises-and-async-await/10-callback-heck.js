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

function main() {
  const myNum = 1;

  timesTwoAsync(myNum)
    .then((duplicated1) => {
      return plusOneAsync(duplicated1).then((addedTo1) => {
        return timesTwoAsync(addedTo1).then((duplicated2) => {
          return plusOneAsync(duplicated2).then((addedTo2) => {
            return timesTwoAsync(addedTo2).then((duplicated3) => {
              return plusOneAsync(duplicated3).then((addedTo3) => {
                return timesTwoAsync(addedTo3).then((duplicated4) => {
                  return duplicated4;
                });
              });
            });
          });
        });
      });
    })
    .then((result) => {
      console.log(result);
    });
}

main();
