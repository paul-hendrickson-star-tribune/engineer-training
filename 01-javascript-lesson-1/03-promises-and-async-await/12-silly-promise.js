class SillyPromise {
  status = "pending";
  onSillyThen;
  onSillyCatch;
  sillySuccessData;
  sillyCatchData;

  constructor(cb) {
    cb(
      (resolve) => {
        if (this.status !== "pending") return;
        this.status = "resolved";
        if (this.onSillyThen) {
          this.onSillyThen(resolve);
        } else {
          this.sillySuccessData = resolve;
        }
      },
      (reject) => {
        if (this.status !== "pending") return;
        this.status = "rejected";
        if (this.onSillyCatch) {
          this.onSillyCatch(reject);
        } else {
          this.sillyCatchData = reject;
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

new SillyPromise((res, rej) => {
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
