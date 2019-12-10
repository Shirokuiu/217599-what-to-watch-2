import React from "react";
import renderer from "react-test-renderer";

import {LoadMore} from "./load-more";

it(`Is load-more rendered`, () => {
  const tree = renderer.create(<LoadMore
    onLoadMoreClick={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
