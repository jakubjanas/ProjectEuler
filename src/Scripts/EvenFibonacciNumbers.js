export const getFibonacciNumbersSum = () => {
  const limit = 4000000;
  let sum = 0;
  let value1 = 1;
  let value2 = 1;
  let temp = value1 + value2;

  while (temp < limit) {
    sum = sum + temp;
    value1 = value2 + temp;
    value2 = value1 + temp;
    temp = value1 + value2;
  }

  return sum;
};

export const getFibonacciNumbersSumRecursive = () => {
  let valuesArray = [];
  const maxTaskFibonnaciNumber = 33;

  getFibonacciNumbersRecursive(maxTaskFibonnaciNumber, valuesArray);

  const sum = valuesArray.reduce((sum, value) => {
    if (value % 2 === 0 && value <= 4000000) return sum + value;
    return sum;
  }, 0);

  return sum;
};

const getFibonacciNumbersRecursive = (value, valuesArray) => {
  valuesArray = valuesArray || [];

  if (valuesArray[value]) return valuesArray[value];
  if (value <= 1) return 1;

  const numb =
    getFibonacciNumbersRecursive(value - 1, valuesArray) +
    getFibonacciNumbersRecursive(value - 2, valuesArray);

  return (valuesArray[value] = numb);
};
