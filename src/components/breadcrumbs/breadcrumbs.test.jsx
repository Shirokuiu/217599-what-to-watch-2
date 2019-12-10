import React from "react";
import renderer from "react-test-renderer";

import {Breadcrumbs} from "./breadcrumbs";

import {films} from "../../mocks/mocks";

it(`Is breadcrumbs rendered`, () => {
  const tree = renderer.create(<Breadcrumbs
    movieId={1}
    movies={films}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
