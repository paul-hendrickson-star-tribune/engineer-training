const { CallBackHandler } = require("./02-callback-handler");

describe("CallbackHandler", () => {
  it("CallBackHandler should be defined", () => {
    expect(CallBackHandler).toBeDefined();
  });
  it("should take have a constructor that populates the dataset property", () => {
    const myCallbackHandler = new CallBackHandler([1, 2, 3, 4, 5]);
    expect(myCallbackHandler.dataset).toEqual([1, 2, 3, 4, 5]);
  });
  it("should have a method called handleCallback", () => {
    const myCallbackHandler = new CallBackHandler([1, 2, 3, 4, 5]);
    expect(myCallbackHandler.handleCallBacks).toBeDefined();
  });
  it("CallbackHandler.handleCallback should call the first callback the number of times as there are things in the array from the constructor ", () => {
    const myCallbackHandler = new CallBackHandler([1, 2, 3, 4, 5]);

    const isTrue = jest.fn((value) => value % 2 === 0);
    const onTrue = jest.fn();
    const onFalse = jest.fn();

    expect(myCallbackHandler.handleCallBacks(isTrue, onTrue, onFalse));
    expect(isTrue).toHaveBeenCalledTimes(5);
    expect(onTrue).toHaveBeenCalledWith(2);
    expect(onTrue).toHaveBeenCalledWith(4);
    expect(onFalse).toHaveBeenCalledWith(1);
    expect(onFalse).toHaveBeenCalledWith(3);
    expect(onFalse).toHaveBeenCalledWith(5);
  });

  it("CallbackHandler.handleCallback should be able to handle more than just numbers ", () => {
    const myCallbackHandler = new CallBackHandler(["a", "B", "C", "d", "e"]);

    const isUppercase = jest.fn((value) => value.toUpperCase() === value);
    const onUppercase = jest.fn();
    const onLowerCase = jest.fn();

    expect(
      myCallbackHandler.handleCallBacks(isUppercase, onUppercase, onLowerCase)
    );
    expect(isUppercase).toHaveBeenCalledTimes(5);
    expect(onUppercase).toHaveBeenCalledWith("B");
    expect(onUppercase).toHaveBeenCalledWith("C");
    expect(onLowerCase).toHaveBeenCalledWith("a");
    expect(onLowerCase).toHaveBeenCalledWith("d");
    expect(onLowerCase).toHaveBeenCalledWith("e");
  });
});
