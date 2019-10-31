import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./app";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is app has state - movieId`, () => {
  const app = shallow(<App
    films={films}
  />);

  expect(app.state()).toHaveProperty(`movieId`);
});
