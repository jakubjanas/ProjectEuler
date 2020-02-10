import "./styles.css";
import { getSumOfMultiples } from "./Scripts/MultiplesOf3And5";

document.getElementById("app").innerHTML = `
<h1>Project Euler!</h1>
<h4>Multiples of 3 and 5</h4>
<div>
  Result: ${getSumOfMultiples(3, 5)}
</div>
`;
