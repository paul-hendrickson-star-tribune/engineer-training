async function main() {
  const data = await new Promise((res) => {
    res("Hello, World!");
  });
  console.log(data);
}
