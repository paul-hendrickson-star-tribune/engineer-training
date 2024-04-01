const { sherlock, watson } = require("./02-sherlock-and-watson-move");

describe("Sherlock and Watson Move.", () => {
  it("should have code that says that Sherlock and Watson are defined", () => {
    expect(sherlock).toBeDefined();
    expect(watson).toBeDefined();
  });
  it("should have code that says that the address.street, address.city, and address.country for both Sherlock and Watson are their new address at 221C Butcher Street, London, England.", () => {
    expect(sherlock.address.street).toBe("221C Butcher Street");
    expect(sherlock.address.city).toBe("London");
    expect(sherlock.address.country).toBe("England");

    expect(watson.address.street).toBe("221C Butcher Street");
    expect(watson.address.city).toBe("London");
    expect(watson.address.country).toBe("England");
  });
});
