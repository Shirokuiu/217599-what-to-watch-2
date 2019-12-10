import React from "react";
import renderer from "react-test-renderer";

import {Footer} from "./footer";

it(`Is footer rendered`, () => {
  const tree = renderer.create(<Footer />).toJSON();

  expect(tree).toMatchSnapshot();
});
