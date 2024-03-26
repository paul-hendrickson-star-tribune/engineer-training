new Promise((_res, rej) => {
  rej("AHH BAD STUFF HAPPENED!");
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(`err: ${err}`);
  });
