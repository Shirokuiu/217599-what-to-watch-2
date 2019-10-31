import React from "react";
import renderer from "react-test-renderer";

import {SimmilarMovie} from "./simmilar-movie";

import {films} from "../../mocks/mocks";

it(`Is simmilar movie rendered`, () => {
  const tree = renderer.create(<SimmilarMovie
    mocks={films}
    onMovieClick={jest.fn()}
    onMoviePageClick={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
