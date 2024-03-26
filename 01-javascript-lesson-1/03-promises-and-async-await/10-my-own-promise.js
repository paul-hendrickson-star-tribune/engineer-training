class MyPromise {
  success = false;
  successData;
  failure = false;
  failureData;

  constructor(cb) {
    cb(
      (data) => {
        if (this.failure) return;
        this.success = true;
        this.successData = data;
      },
      (data) => {
        if (this.success) return;
        this.failure = true;
        this.failureData = data;
      }
    );
  }

  myThen(cb) {
    if (this.success) {
      cb(this.successData);
    }
    return this;
  }
  myCatch(cb) {
    if (this.failure) {
      cb(this.failureData);
    }
    return this;
  }
}

const thing = new MyPromise((res, rej) => {
  res("success");
  rej("failure");
})
  .myThen((data) => {
    console.log(data);
  })
  .myCatch((data) => {
    console.error(data);
  });
