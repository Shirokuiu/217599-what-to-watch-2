import React from "react";
import renderer from "react-test-renderer";

import {GenreCatalog} from "./genre-catalog";

import {films} from "../../mocks/mocks";

it(`Is genre catalog rendered`, () => {
  const tree = renderer
    .create(<GenreCatalog
      onMovieClick={jest.fn()}
      movies={films}
    />);

  expect(tree).toMatchSnapshot();
});
