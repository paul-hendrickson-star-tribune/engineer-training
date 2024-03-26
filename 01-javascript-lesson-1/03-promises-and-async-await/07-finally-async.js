async function main() {
  try {
    const data = await new Promise((res) => {
      res("Hello, World!");
    });
    console.log(data);
  } catch (err) {
    console.error(`err: ${err}`);
  } finally {
    console.log("Finally block executed");
  }
}
main();
