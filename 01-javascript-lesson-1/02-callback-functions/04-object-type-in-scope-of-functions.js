function giveObject(cb) {
  const obj = {
    name: "John",
    age: 30,
    city: "New York",
  };

  cb(obj);

  console.log(obj);
}

const nameAnObject = (someObject) => {
  someObject.name = "paul";
};

giveObject(nameAnObject);
