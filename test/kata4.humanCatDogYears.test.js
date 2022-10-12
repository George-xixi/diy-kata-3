const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  test("returns an array with the passed number value", () => {
    expect(humanCatDogYears(10)).toEqual([10]);
  });
});
