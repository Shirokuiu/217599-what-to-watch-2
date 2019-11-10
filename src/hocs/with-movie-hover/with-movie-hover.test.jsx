import React from "react";
import renderer from "react-test-renderer";

import {Movie} from "../../components/movie/movie";

import {films} from "../../mocks/mocks";

it(`Is movie render`, () => {
  const tree = renderer
    .create(<Movie
      film={films[0]}
      id={0}
      key={0}
      onMovieClick={jest.fn()}
      onMovieEnter={jest.fn()}
      onMovieLeave={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
