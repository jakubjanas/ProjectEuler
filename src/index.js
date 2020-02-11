import "./styles.css";
import { getSumOfMultiples } from "./Scripts/MultiplesOf3And5";
import {
  getFibonacciNumbersSum,
  getFibonacciNumbersSumRecursive
} from "./Scripts/EvenFibonacciNumbers";

document.getElementById("app").innerHTML = `
<h1>Project Euler!</h1>
<h4>Multiples of 3 and 5</h4>
<div>
  Result: ${getSumOfMultiples(3, 5)}
</div>
<div>
  <h4>Even Fibonacci numbers</h4>
  Result: ${getFibonacciNumbersSum()} <br />
  Recursive result: ${getFibonacciNumbersSumRecursive()}
</div>
`;
