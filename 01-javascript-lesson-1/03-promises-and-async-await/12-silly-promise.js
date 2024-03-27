class SillyPromise {
  status = "pending";
  onSillyThen;
  onSillyCatch;
  sillySuccessData;
  sillyCatchData;

  constructor(cb) {
    cb(
      (data) => {
        if (this.status !== "pending") return;
        this.status = "resolved";
        if (this.onSillyThen) {
          this.onSillyThen(data);
        } else {
          this.sillySuccessData = data;
        }
      },
      (data) => {
        if (this.status !== "pending") return;
        this.status = "rejected";
        if (this.onSillyCatch) {
          this.onSillyCatch(data);
        } else {
          this.sillyCatchData = data;
        }
      }
    );
  }

  sillyThen(cb) {
    if (this.sillySuccessData) cb(this.sillySuccessData);
    else this.onSillyThen = cb;
    return this;
  }

  sillyCatch(cb) {
    if (this.sillyCatchData) cb(this.sillyCatchData);
    else this.onSillyCatch = cb;
    return this;
  }
}

const thing = new SillyPromise((res, rej) => {
  setTimeout(() => {
    rej("bad!");
  }, 1000);
})
  .sillyThen((data) => {
    console.log(data);
  })
  .sillyCatch((data) => {
    console.error(data);
  });
