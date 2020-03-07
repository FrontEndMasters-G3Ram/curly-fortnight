import React from "react";
import { render } from "react-dom";

const Pet = props => {
  let { name, type, breed } = props;
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, type),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Mia", type: "Dog", breed: "Pom" }),
    React.createElement(Pet, { name: "Doink", type: "Cat", breed: "Mixed" }),
    React.createElement(Pet, { name: "Drill", type: "Dog", breed: "Lab" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
