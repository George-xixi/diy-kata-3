const humanCatDogYears = (number) => {
  const yearsArray = [];
  if (number === 0) {
    const catYears = 0;
    const dogYears = 0;
    yearsArray.push(number, catYears, dogYears);
    return yearsArray;
  }
  if (number === 1) {
    const catYears = 15;
    const dogYears = 15;
    yearsArray.push(number, catYears, dogYears);
    return yearsArray;
  }
  if (number === 2) {
    const catYears = 15 + 9;
    const dogYears = 15 + 9;
    yearsArray.push(number, catYears, dogYears);
    return yearsArray;
  }
  if (number >= 3) {
    const catYears = 15 + 9 + (number - 2) * 4;
    const dogYears = 15 + 9 + (number - 2) * 5;
    yearsArray.push(number, catYears, dogYears);
    return yearsArray;
  }
  return "input not valid";
};

module.exports = humanCatDogYears;
