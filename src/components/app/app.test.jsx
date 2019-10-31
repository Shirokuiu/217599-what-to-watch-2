import React from "react";
import renderer from "react-test-renderer";

import App from "./app";

import {films} from "../../mocks/mocks";

it(`Is App render`, () => {
  const tree = renderer
    .create(<App
      films={films}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
