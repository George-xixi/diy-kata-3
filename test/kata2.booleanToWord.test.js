const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns 'yes' when passed the boolean value true", () => {
    expect(booleanToWord(true)).toEqual("Yes");
  });
  it("returns 'no' when passed the boolean value false", () => {
    expect(booleanToWord(false)).toEqual("No");
  });
});
