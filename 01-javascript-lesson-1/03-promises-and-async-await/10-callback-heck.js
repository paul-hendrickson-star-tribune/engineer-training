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
    .then((step1Duplicate) => {
      return plusOneAsync(step1Duplicate).then((step2Add) => {
        return timesTwoAsync(step2Add).then((step3Duplicate) => {
          return plusOneAsync(step3Duplicate).then((step4Add) => {
            return timesTwoAsync(step4Add).then((step5Duplicate) => {
              return plusOneAsync(step5Duplicate).then((step6Add) => {
                return timesTwoAsync(step6Add).then((step7Duplicate) => {
                  return step7Duplicate;
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
