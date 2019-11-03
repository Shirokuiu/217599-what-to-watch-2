import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import {GenreCatalog} from "./genre-catalog";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is genre catalog rendered`, () => {
  const tree = shallow(<GenreCatalog
    onMovieClick={jest.fn()}
    movies={films}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
