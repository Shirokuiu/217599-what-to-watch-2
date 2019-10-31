import React from "react";
import renderer from "react-test-renderer";

import {MovieTabs} from "./movie-tabs";

it(`Is movie tabs rendered`, () => {
  const tree = renderer.create(<MovieTabs
    movieId={0}
    onTabClick={jest.fn()}
    activeTab={`details`}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
