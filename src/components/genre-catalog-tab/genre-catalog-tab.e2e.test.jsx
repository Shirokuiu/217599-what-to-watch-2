import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {GenreCatalogTab} from "./genre-catalog-tab";

Enzyme.configure({adapter: new Adapter()});

it(`Is tab clicked`, () => {
  const clickHandler = jest.fn();
  const genreCatalogTab = shallow(<GenreCatalogTab
    genre={``}
    onTabClick={clickHandler}
  />);

  const tabs = genreCatalogTab.find(`.catalog__genres-link`);

  tabs.forEach((tab) => tab.simulate(`click`, {
    preventDefault: () => {},
    target: {
      textContent: ``
    }
  }));

  expect(clickHandler).toHaveBeenCalledTimes(tabs.length);
});
