import React from "react";
import renderer from "react-test-renderer";

import {MainPage} from "./main-page";

import {films} from "../../mocks/mocks";

it(`Is MainPage rendered`, () => {
  const tree = renderer
    .create(<MainPage
      filmsMock={films}
      onMovieClick={jest.fn()}
    />);

  expect(tree).toMatchSnapshot();
});
