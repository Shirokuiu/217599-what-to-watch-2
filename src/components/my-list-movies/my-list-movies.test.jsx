import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import {MyListMovies} from "../my-list-movies/my-list-movies";

import {films} from "../../mocks/mocks";

it(`Is my list movies rendered`, () => {
  const tree = renderer.create(<BrowserRouter>
    <MyListMovies
      moviesFavorite={films}
    />
  </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
