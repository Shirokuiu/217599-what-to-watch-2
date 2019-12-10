import React from "react";
import renderer from "react-test-renderer";

import {LoginForm} from "./login-form";

it(`Is login form rendered`, () => {
  const tree = renderer.create(<LoginForm
    onUserInput={jest.fn()}
    onSubmit={jest.fn()}
    validation={{
      email: true,
      password: true,
      message: undefined
    }}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
