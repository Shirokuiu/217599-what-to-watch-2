import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

import {Avatar} from "../avatar/avatar";

it(`Is avatar rendered`, () => {
  const tree = renderer.create(<BrowserRouter>
    <Avatar
      avatar={`test`}
    />
  </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
