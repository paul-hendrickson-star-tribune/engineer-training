const { customMapFunction } = require("./01-custom-array-map");

describe("Custom map function", () => {
  it("Should be defined", () => {
    expect(customMapFunction).toBeDefined();
  });

  it("Should take take in an array and a callback function and the callback function should be called with every index of the array", () => {
    const myArray = [1, 2, 3, 4, 5];
    const myCallback = jest.fn((value) => value * 2);
    const result = customMapFunction(myArray, myCallback);
    expect(myCallback).toHaveBeenCalledTimes(myArray.length);
    expect(myCallback).toHaveBeenCalledWith(1);
    expect(myCallback).toHaveBeenCalledWith(2);
    expect(myCallback).toHaveBeenCalledWith(3);
    expect(myCallback).toHaveBeenCalledWith(4);
    expect(myCallback).toHaveBeenCalledWith(5);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  it("Should not change the original array", () => {
    const myArray = [1, 2, 3, 4, 5];
    const myCallback = (value) => value * 2;

    customMapFunction(myArray, myCallback);
    expect(myArray).toEqual([1, 2, 3, 4, 5]);
  });
});
