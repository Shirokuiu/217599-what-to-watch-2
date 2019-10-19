import React from "react";
import renderer from "react-test-renderer";

import {App} from "./app";

it(`Is App render`, () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
