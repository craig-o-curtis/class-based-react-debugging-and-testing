import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import App from "./App";

// default test from create-react-app
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

// Snapshot test
test("App snapshot test", () => {
  // container App
  const component = renderer.create(<App />);
  // tree for json data
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
