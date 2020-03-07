import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Mia", type: "Dog", breed: "Pom" }),
    React.createElement(Pet, { name: "Doink", type: "Cat", breed: "Mixed" }),
    React.createElement(Pet, { name: "Drill", type: "Dog", breed: "Lab" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
