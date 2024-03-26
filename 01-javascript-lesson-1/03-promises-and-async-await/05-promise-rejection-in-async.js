async function main() {
  try {
    const data = await new Promise((_res, rej) => {
      rej("AHH BAD STUFF HAPPENED!");
    });
    console.log(data);
  } catch (err) {
    console.error(`err: ${err}`);
  }
}
main();
