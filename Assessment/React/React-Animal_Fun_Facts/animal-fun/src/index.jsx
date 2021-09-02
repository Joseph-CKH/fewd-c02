import { animals } from "./animals";
import "./index.css";

import ocean from "./image/ocean.jpg";

import React from "react";
import ReactDOM from "react-dom";

function animalFacts() {
  return (
    <div>
      <h1>'Click an animal for a fun fact</h1>
      <img className="background" src={ocean} alt="pcean" />
    </div>
  );
}

ReactDOM.render(animalFacts, document.querySelector("#root"));
