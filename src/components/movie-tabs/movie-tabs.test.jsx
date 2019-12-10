import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import {MovieTabs} from "./movie-tabs";

it(`Is movie tabs rendered`, () => {
  const tree = renderer.create(<BrowserRouter>
    <MovieTabs
      id={0}
    />
  </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
