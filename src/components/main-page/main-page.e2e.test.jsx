import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {MainPage} from "./main-page";

Enzyme.configure({adapter: new Adapter()});

it(`Is clicked movie title`, () => {
  const clickHandler = jest.fn();
  const mainPage = shallow(<MainPage
    filmsName={[
      `Fantastic Beasts`,
      `Bohemian Rhapsody`,
      `Macbeth`
    ]}
    showMovie={clickHandler}
  />);

  const movieLink = mainPage.find(`.small-movie-card__link`);

  movieLink.forEach((it) => it.simulate(`click`));

  expect(clickHandler).toHaveBeenCalled();
});
