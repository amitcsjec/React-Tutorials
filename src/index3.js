import React from "react";
import ReactDom from "react-dom";
// import { add, divide, multiply, subtract } from "./calculator";
import * as Calculator from "./calculator";
ReactDom.render(
  <ul>
    <li>{Calculator.add(1, 2)}</li>
    <li>{Calculator.subtract(7, 2)}</li>
    <li>{Calculator.multiply(2, 3)}</li>
    <li>{Calculator.divide(5, 2)}</li>
  </ul>,

  document.getElementById("root")
);
