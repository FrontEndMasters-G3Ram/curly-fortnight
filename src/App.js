const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.type),
    React.createElement("h2", {}, props.breed)
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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
