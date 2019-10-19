import React from "react";
import renderer from "react-test-renderer";

import {MainPage} from "./main-page";

it(`Is MainPage rendered`, () => {
  const tree = renderer
    .create(<MainPage
      filmsName={[
        `Fantastic Beasts`,
        `Bohemian Rhapsody`,
        `Macbeth`
      ]}
      showMovie={jest.fn()}
    />);

  expect(tree).toMatchSnapshot();
});
