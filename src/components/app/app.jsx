import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import MoviePage from "../movie-page/movie-page";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import AddReviewPage from "../add-review-page/add-review-page";
import MoviePlayer from "../movie-player/movie-player";
import {MyList} from "../my-list/my-list";
import {NotFound} from "../not-found/not-found";

import {withPrivateRoute} from "../../hocs/with-private-route/with-private-route";
import {withMoviePlayer} from "../../hocs/with-movie-player/with-movie-player";
import {withSessionStorage} from "../../hocs/with-session-storage/with-session-storage";

const AddReviewPagePrivate = withPrivateRoute(AddReviewPage);
const MyListPrivate = withPrivateRoute(MyList);
const MoviePlayerWrapped = withMoviePlayer(withSessionStorage(MoviePlayer));
const MoviePageWrapped = withSessionStorage(MoviePage);

export const AppSettings = {
  MOVIES_INIT_LENGTH: 8,
  MOVIES_TO_LOAD: 20
};

export const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/movie/:movieId/add-review" component={AddReviewPagePrivate} />
      <Route path="/movie/:movieId/watch" component={MoviePlayerWrapped} />
      <Route path="/movie/:movieId" component={MoviePageWrapped} />
      <Route path="/my-list" component={MyListPrivate} exact/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>;
};
