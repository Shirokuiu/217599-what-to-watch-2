import React from "react";
import renderer from "react-test-renderer";

import {GenreCatalogTab} from "./genre-catalog-tab";

it(`Is genre catalog tab rendered`, () => {
  const tree = renderer
    .create(<GenreCatalogTab
      genre={``}
      onTabClick={jest.fn()}
    />);

  expect(tree).toMatchSnapshot();
});
