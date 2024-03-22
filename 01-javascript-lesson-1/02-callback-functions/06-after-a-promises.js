async function doAfterTimeout(cb) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  cb();
}

doAfterTimeout(function () {
  console.log("I am a callback!");
});
