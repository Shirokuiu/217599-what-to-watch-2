import React from "react";
import renderer from "react-test-renderer";

import {MovieList} from "./movie-list";

import {films} from "../../mocks/mocks";

it(`Is movie list rendered`, () => {
  const tree = renderer
    .create(<MovieList
      films={films}
      onMovieEnter={jest.fn()}
    />);

  expect(tree).toMatchSnapshot();
});
