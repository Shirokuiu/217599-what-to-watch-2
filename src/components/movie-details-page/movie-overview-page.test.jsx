import React from "react";
import renderer from "react-test-renderer";

import {MovieOverviewPage} from "./movie-overview-page";

import {films} from "../../mocks/mocks";

it(`Is movie overview page rendered`, () => {
  const tree = renderer
    .create(<MovieOverviewPage
      movie={films[0]}
    />);

  expect(tree).toMatchSnapshot();
});
