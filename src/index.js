import "./styles.css";

const getSumOfMultiples = (value1, value2) => {
  const numbers = [...Array(1000).keys()];
  return numbers.reduce((item1, item2) => {
    if (item2 % value1 === 0 || item2 % value2 === 0) {
      return item1 + item2;
    }

    return item1;
  }, 0);
};

document.getElementById("app").innerHTML = `
<h1>Project Euler!</h1>
<h3>Multiples of 3 and 5</h3>
<div>
  Result: ${getSumOfMultiples(3, 5)}
</div>
`;
