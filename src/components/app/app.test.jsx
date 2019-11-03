import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import App from "./app";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is App render`, () => {
  const tree = shallow((<App
    films={films}
  />));

  expect(toJson(tree)).toMatchSnapshot();
});
