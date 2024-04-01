/**
 * Finish writing the method handleCallbacks on the CallBackHandler class.
 * The method should take three arguments:
 * The first being a callback function that takes in a single argument and returns a boolean
 * The second being a callback function that will be called if the first callback returns true
 * The third being a callback function that will be called if the first callback returns false
 * NOTE: Yes, this is a silly example that no one would ever do. But it's just for practice.
 */

class CallBackHandler {
  dataset = [];

  /** @param {Array<any>} dataset */
  constructor(dataset) {
    this.dataset = dataset;
  }

  handleCallBacks(isTrue, onTrue, onFalse) {
    this.dataset;

    for (let i = 0; i < this.dataset.length; i++) {
      const data = this.dataset[i];
      /** Your code here */
      if (isTrue(data)) onTrue(data);
      else onFalse(data);

      /** End code */
    }
  }
}

const myCallbackHandler = new CallBackHandler([1, 2, 3, 4, 5]);
const isEven = (value) => value % 2 === 0;
const onIsEven = (value) => console.log(`${value} is even`);
const onIsOdd = (value) => console.log(`${value} is odd`);

myCallbackHandler.handleCallBacks(isEven, onIsEven, onIsOdd);

module.exports = { CallBackHandler };
