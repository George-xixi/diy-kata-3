const numberToReversedDigits = (number) => {
  const reversedDigits = Array.from(String(number), Number).reverse();
  return reversedDigits;
};

module.exports = numberToReversedDigits;
