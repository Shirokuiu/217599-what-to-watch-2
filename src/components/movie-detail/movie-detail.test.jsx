import React from "react";
import renderer from "react-test-renderer";

import {MovieDetail} from "./movie-detail";

it(`Is movie details rendered`, () => {
  const tree = renderer.create(<MovieDetail />).toJSON();

  expect(tree).toMatchSnapshot();
});
