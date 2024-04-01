const {
  callbackHeck,
  asyncLessHeck,
  addBar,
  addFoo,
} = require("./02-removing-callback-heck");

describe("callbackHeck", () => {
  it("Should be defined", () => {
    expect(callbackHeck).toBeDefined();
  });

  it("Should return the expected value", async () => {
    const result = await callbackHeck({ addFoo, addBar });
    expect(result).toBe("foobarfoofoobarfoofoobar");
  });

  it("Should call the appropriate functions", async () => {
    const mockAddFoo = jest.fn(async (str) => str + "foo");
    const mockAddBar = jest.fn(async (str) => str + "bar");

    await callbackHeck({ addFoo: mockAddFoo, addBar: mockAddBar });

    expect(mockAddFoo).toHaveBeenCalledTimes(5);
    expect(mockAddBar).toHaveBeenCalledTimes(3);
  });
});

describe("asyncLessHeck", () => {
  it("Should be defined", () => {
    expect(asyncLessHeck).toBeDefined();
  });

  it("Should return the expected value", async () => {
    const result = await asyncLessHeck({ addFoo, addBar });
    expect(result).toBe("foobarfoofoobarfoofoobar");
  });

  it("Should call the appropriate functions", async () => {
    const mockAddFoo = jest.fn(async (str) => str + "foo");
    const mockAddBar = jest.fn(async (str) => str + "bar");

    await asyncLessHeck({ addFoo: mockAddFoo, addBar: mockAddBar });

    expect(mockAddFoo).toHaveBeenCalledTimes(5);
    expect(mockAddBar).toHaveBeenCalledTimes(3);
  });
});
