const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(54321)).toEqual([1, 2, 3, 4, 5]);
    expect(numberToReversedDigits(9991)).toEqual([1, 9, 9, 9]);
    expect(numberToReversedDigits(100010)).toEqual([0, 1, 0, 0, 0, 1]);
  });
});
