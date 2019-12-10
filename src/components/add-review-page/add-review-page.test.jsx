import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

import {AddReviewPage} from "./add-review-page";

import {films} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is add review page rendered`, () => {
  const tree = shallow(<AddReviewPage
    match={{
      params: {
        movieId: `1`
      }
    }}
    history={{}}
    movies={films}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
