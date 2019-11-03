import React from "react";
import renderer from "react-test-renderer";

import MainPage from "./main-page";

it(`Is MainPage rendered`, () => {
  const tree = renderer
    .create(<MainPage
      onMovieClick={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
