import React from "react";
import renderer from "react-test-renderer";

import {MovieReview} from "./movie-review";

it(`Is movie review rendered`, () => {
  const tree = renderer.create(<MovieReview />).toJSON();

  expect(tree).toMatchSnapshot();
});
