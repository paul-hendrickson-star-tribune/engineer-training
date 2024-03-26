// note this is the same if the function wasn't async
async function main() {
  const data = new Promise((res) => {
    res("Hello, World!");
  });
  console.log(data);
}
main();
