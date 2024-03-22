const {
  sherlock,
  watson,
  newWatson,
  changeAddress,
} = require("./03-sherlock-and-watson-falling-out");

describe("Sherlock and Watson have a falling out.", () => {
  it("should have code that says that Sherlock, Watson, and changeAddress are defined", () => {
    expect(sherlock).toBeDefined();
    expect(watson).toBeDefined();
    expect(changeAddress).toBeDefined();
    expect(newWatson).toBeDefined();
  });

  it("should have created a new object for Watson with the correct address", () => {
    expect(newWatson.address.street).toBe("221D Butler Street");
    expect(newWatson.address.city).toBe("Burbank");
    expect(newWatson.address.country).toBe("USA");
  });

  it("should update the address of a person", () => {
    const homerSimpson = {
      address: {
        street: "1234 Elm Street",
        city: "Springfield",
        country: "USA",
      },
    };
    const result = changeAddress(homerSimpson, {
      street: "4321 Maple Street",
      city: "Shelbyville",
      country: "USA",
    });
    expect(result.address.street).toBe("4321 Maple Street");
    expect(result.address.city).toBe("Shelbyville");
    expect(result.address.country).toBe("USA");
  });

  it("Should not change the address of any other person", () => {
    const simpsonAddress = {
      street: "1234 Elm Street",
      city: "Springfield",
      country: "USA",
    };
    const homerSimpson = { address: simpsonAddress };
    const margeSimpson = { address: simpsonAddress };

    const result = changeAddress(homerSimpson, {
      street: "4321 Maple Street",
      city: "Shelbyville",
      country: "USA",
    });
    expect(result.address.street).toBe("4321 Maple Street");
    expect(result.address.city).toBe("Shelbyville");
    expect(result.address.country).toBe("USA");

    expect(margeSimpson.address.street).toBe("1234 Elm Street");
    expect(margeSimpson.address.city).toBe("Springfield");
    expect(margeSimpson.address.country).toBe("USA");
  });

  it("Should not change the original object address and instead return a new one", () => {
    const simpsonAddress = {
      street: "1234 Elm Street",
      city: "Springfield",
      country: "USA",
    };
    const homerSimpson = { address: simpsonAddress };

    const result = changeAddress(homerSimpson, {
      street: "4321 Maple Street",
      city: "Shelbyville",
      country: "USA",
    });

    expect(result.address.street).toBe("4321 Maple Street");
    expect(result.address.city).toBe("Shelbyville");
    expect(result.address.country).toBe("USA");

    expect(simpsonAddress.street).toBe("1234 Elm Street");
    expect(simpsonAddress.city).toBe("Springfield");
    expect(simpsonAddress.country).toBe("USA");
  });

  it("should return an object that is not altered by other operations", () => {
    const simpsonAddress = {
      street: "1234 Elm Street",
      city: "Springfield",
      country: "USA",
    };
    const shelbyvilleAddress = {
      street: "4321 Maple Street",
      city: "Shelbyville",
      country: "USA",
    };
    const homerSimpson = { address: simpsonAddress };

    const result = changeAddress(homerSimpson, shelbyvilleAddress);

    shelbyvilleAddress.street = "1234 Elm Street";
    shelbyvilleAddress.city = "Springfield";
    shelbyvilleAddress.country = "Canada";

    expect(result.address.street).toBe("4321 Maple Street");
    expect(result.address.city).toBe("Shelbyville");
    expect(result.address.country).toBe("USA");
  });

  it("should return an object with all the same properties as the original", () => {
    const homerSimpson = {
      firstName: "Homer",
      lastName: "Simpson",
      address: {
        street: "1234 Elm Street",
        city: "Springfield",
        country: "USA",
      },
    };
    const result = changeAddress(homerSimpson, {
      street: "4321 Maple Street",
      city: "Shelbyville",
      country: "USA",
    });

    expect(result.firstName).toBe("Homer");
    expect(result.lastName).toBe("Simpson");
    expect(result.address.street).toBe("4321 Maple Street");
    expect(result.address.city).toBe("Shelbyville");
    expect(result.address.country).toBe("USA");
    expect(Object.keys(result)).toStrictEqual([
      "firstName",
      "lastName",
      "address",
    ]);
  });
});
