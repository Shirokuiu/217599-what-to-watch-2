import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";

import {Header} from "./header";

Enzyme.configure({adapter: new Adapter()});

it(`Is header rendered`, () => {
  const tree = shallow(<BrowserRouter>
    <Header
      isAuthorized={false}
    />
  </BrowserRouter>);

  expect(toJson(tree)).toMatchSnapshot();
});
