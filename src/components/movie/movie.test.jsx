import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import {Movie} from "./movie";

import {films} from "../../mocks/mocks";

it(`Is movie render`, () => {
  const tree = renderer
    .create(<BrowserRouter>
      <Movie
        movie={films[0]}
        key={0}
        onMovieEnter={jest.fn()}
        onMovieLeave={jest.fn()}
      />
    </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
