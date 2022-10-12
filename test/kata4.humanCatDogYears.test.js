const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  xtest("returns an array with the passed number value", () => {
    expect(humanCatDogYears(10)).toEqual([10]);
  });

  xtest("returns an array with the passed number in cat years", () => {
    expect(humanCatDogYears(10)).toEqual([56]);
    expect(humanCatDogYears(3)).toEqual([28]);
    expect(humanCatDogYears(0)).toEqual([0]);
    expect(humanCatDogYears(1)).toEqual([15]);
    expect(humanCatDogYears(2)).toEqual([24]);
    expect(humanCatDogYears(17)).toEqual([84]);
  });

  xtest("returns an array with the passed number in cat years and dog years", () => {
    expect(humanCatDogYears(10)).toEqual([56, 64]);
    expect(humanCatDogYears(3)).toEqual([28, 29]);
    expect(humanCatDogYears(0)).toEqual([0, 0]);
    expect(humanCatDogYears(1)).toEqual([15, 15]);
    expect(humanCatDogYears(2)).toEqual([24, 24]);
    expect(humanCatDogYears(17)).toEqual([84, 99]);
  });

  test("returns an array with the passed number of human years, and the equivalent cat years and dog years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
    expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    expect(humanCatDogYears(17)).toEqual([17, 84, 99]);
  });
});
