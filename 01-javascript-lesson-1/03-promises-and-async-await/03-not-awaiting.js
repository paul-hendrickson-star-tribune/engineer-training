async function main() {
  const data = new Promise((res) => {
    res("Hello, World!");
  });
  console.log(data);
}
main();
