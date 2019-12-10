import React from "react";

import MyListMovies from "../my-list-movies/my-list-movies";
import {Header} from "../header/header";
import {Footer} from "../footer/footer";

import {withMyListMovies} from "../../hocs/with-my-list-movies/with-my-list-movies";

const MyListMoviesWrapped = withMyListMovies(MyListMovies);

export const MyList = () => {
  const PARENT_STATUS = `MY_LIST`;

  return <div className="user-page">
    <Header parent={PARENT_STATUS} />

    <MyListMoviesWrapped />

    <Footer />
  </div>;
};
