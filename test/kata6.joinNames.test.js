const { joinNames } = require("../src");

describe("joinNames", () => {
  xtest("returns string of names, seperated by commas", () => {
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toEqual("Bart, Lisa, Maggie");
  });
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toEqual("Bart, Lisa, & Maggie");
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }, { name: "Marge" }, { name: "Homer" }])
    ).toEqual("Bart, Lisa, Maggie, Marge, & Homer");
    expect(
      joinNames([{ name: "Joni" }, { name: "Erykah" }, { name: "Lana" }, { name: "Sade" }, { name: "Karen" }, { name: "Carole" }])
    ).toEqual("Joni, Erykah, Lana, Sade, Karen, & Carole");
  });
});
