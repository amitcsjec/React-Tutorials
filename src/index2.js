import React from "react";
import ReactDom from "react-dom";
// import PI, { doublePi, triplePi } from "./math";
import * as pi from "./math";

ReactDom.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
