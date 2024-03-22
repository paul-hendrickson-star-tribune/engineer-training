const {
  sherlock,
  watson,
} = require("./01-sherlock-and-watson-start-a-business");

describe("Sherlock and Watson start a business.", () => {
  it("should have code that says that Sherlock and Watson are defined", () => {
    expect(sherlock).toBeDefined();
    expect(watson).toBeDefined();
  });
  it("should have code that says that the address.street, address.city, and address.country for both Sherlock and Watson are their address at 221B Baker Street, London, England.", () => {
    expect(sherlock.address.street).toBe("221B Baker Street");
    expect(sherlock.address.city).toBe("London");
    expect(sherlock.address.country).toBe("England");

    expect(watson.address.street).toBe("221B Baker Street");
    expect(watson.address.city).toBe("London");
    expect(watson.address.country).toBe("England");
  });
});
