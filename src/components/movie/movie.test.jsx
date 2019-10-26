import React from "react";
import renderer from "react-test-renderer";

import {Movie} from "./movie";

import {films} from "../../mocks/mocks";

it(`Is movie render`, () => {
  const tree = renderer
    .create(<Movie
      key={0}
      id={0}
      img={films[0].img}
      title={films[0].title}
      onMovieClick={jest.fn()}
    />);

  expect(tree).toMatchSnapshot();
});
