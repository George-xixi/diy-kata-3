const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours.");
    expect(reachDestination(100, 15)).toEqual("I should be there in 7 hours.");
    expect(reachDestination(13, 6)).toEqual("I should be there in 2.5 hours.");
    expect(reachDestination(22, 10)).toEqual("I should be there in 2.5 hours.");
  });
});
