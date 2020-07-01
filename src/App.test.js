import React from "react";
import renderer from "react-test-renderer";
import App from "./App";
import NavBar from "./components/NavBar.js";
import Outline from "./components/Outline.js";
import Card from "./components/Card.js";

describe("it should render the app", () => {
  test("renders a App Component", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("renders a navBar Component", () => {
    const tree = renderer.create(<NavBar />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("renders a Outline Component", () => {
    const tree = renderer.create(<Outline />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("renders a Card Component", () => {
    const tree = renderer.create(<Card />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
