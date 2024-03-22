function modifyString(cb) {
  const insideString = "I am a string";
  cb(insideString);
}

const myCallback = (arg) => console.log("WOW! Look at that! " + arg);

modifyString(myCallback);
