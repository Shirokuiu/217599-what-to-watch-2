import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import {MovieList} from "./movie-list";

import {films} from "../../mocks/mocks";

it(`Is movie list rendered`, () => {
  const tree = renderer
    .create(<BrowserRouter>
      <MovieList
        movies={films}
      />
    </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
