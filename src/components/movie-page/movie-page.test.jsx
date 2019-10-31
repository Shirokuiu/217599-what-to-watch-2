import React from "react";
import renderer from "react-test-renderer";

import MoviePage from "./movie-page";

import {films} from "../../mocks/mocks";

it(`Is movie page rendered`, () => {
  const tree = renderer.create(<MoviePage
    filmsMock={films}
    movie={films[0]}
    onMovieClick={jest.fn()}
    movieId={0}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});

