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
  // THIS IS BAD! DO NOT MODIFY OBJECTS IN THIS WAY!
  // BUT IT CAN BE DONE
  someObject.name = "paul";
};

giveObject(nameAnObject);
