/**
 * Any function that begins with async,
 * even if the function does not contain any await calls,
 * will return a promise.
 */

const returnMeAsPromise = async (thing) => thing;

function main() {
  const result = returnMeAsPromise("Hello");
  console.log(result);
}

main();
