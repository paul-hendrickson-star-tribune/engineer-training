const { isAPerson } = require("./03-is-a-person");

describe("isAPerson", () => {
  it("should be defined", () => {
    expect(isAPerson).toBeDefined();
  });
  it("should return true if the object has a property called 'name' and the value of 'name' is a string", () => {
    const myMaybePeople = [
      { name: "John" },
      { naem: "Jane" },
      { nomen: "Jim" },
      { nombre: "Jill" },
      { identifier: "Jack" },
      { id: "Jen" },
      { someProperty: "Jeb" },
      { name: 1 },
      { name: true },
    ];
    const people = myMaybePeople.filter(isAPerson);
    expect(people).toEqual([{ name: "John" }]);
  });
});
