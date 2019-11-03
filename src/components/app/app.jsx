import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import MoviePage from "../movie-page/movie-page";

import MainPage from "../main-page/main-page";

import {NotFound} from "../not-found/not-found";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      movieId: null
    };

    this.handleMovieClick = this.handleMovieClick.bind(this);
  }

  _getScreenOutlet(mocks, onMovieClick) {
    const movieId = window.localStorage.getItem(`movieId`);

    switch (location.pathname) {
      case `/`:
        return <MainPage onMovieClick={onMovieClick}/>;
      case `/movie-${movieId}-overview`:
        return <MoviePage filmsMock={mocks} movie={mocks[movieId]} onMovieClick={onMovieClick} movieId={+movieId}/>;
      case `/movie-${movieId}-details`:
        return <MoviePage filmsMock={mocks} movie={mocks[movieId]} onMovieClick={onMovieClick} movieId={+movieId}/>;
      case `/movie-${movieId}-reviews`:
        return <MoviePage filmsMock={mocks} movie={mocks[movieId]} onMovieClick={onMovieClick} movieId={+movieId}/>;
    }
    return <NotFound />;
  }

  handleMovieClick(movieId) {
    this.setState({movieId});
    window.localStorage.setItem(`movieId`, movieId);
  }

  render() {
    const {films} = this.props;

    return <React.Fragment>{this._getScreenOutlet(films, this.handleMovieClick)}</React.Fragment>;
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired
};
