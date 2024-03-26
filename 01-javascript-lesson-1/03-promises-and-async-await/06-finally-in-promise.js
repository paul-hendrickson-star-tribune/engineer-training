new Promise((res) => {
  res("Hello, World!");
})
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("Finally block executed");
  });
