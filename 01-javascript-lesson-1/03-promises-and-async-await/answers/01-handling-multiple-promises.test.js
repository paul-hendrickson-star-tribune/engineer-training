const { handleSeveralPromises } = require("./01-handling-multiple-promises");

describe("handle several promises", () => {
  it("Should be defined", () => {
    expect(handleSeveralPromises).toBeDefined();
  });

  it("should return a promise that resolves to an array of strings that match the correct values", () => {
    return handleSeveralPromises().then((result) => {
      expect(result).toEqual([
        "prom1",
        "prom2",
        "prom3",
        "prom4",
        "prom5",
        "prom6",
        "prom7",
        "prom8",
      ]);
    });
  });
});
