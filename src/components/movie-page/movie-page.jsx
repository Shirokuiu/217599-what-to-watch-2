import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {MovieTabs} from "../movie-tabs/movie-tabs";
import {SimmilarMovie} from "../simmilar-movie/simmilar-movie";
import {NotFound} from "../not-found/not-found";
import {MovieOverview} from "../movie-overview/movie-overview";
import {MovieDetail} from "../movie-detail/movie-detail";
import {MovieReview} from "../movie-review/movie-review";

export default class MoviePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: location.pathname.split(`-`).splice(-1)[0]
    };

    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleMovieClick = this.handleMovieClick.bind(this);
  }

  _getScreenOutlet(movie) {
    const {movieId} = this.props;

    switch (location.pathname) {
      case `/movie-${movieId}-overview`:
        return <MovieOverview movie={movie}/>;
      case `/movie-${movieId}-details`:
        return <MovieDetail />;
      case `/movie-${movieId}-reviews`:
        return <MovieReview />;
    }

    return <NotFound />;
  }

  handleTabClick(activeTab) {
    this.setState({activeTab});
  }

  handleMovieClick() {
    this.setState({activeTab: `overview`});
  }

  render() {
    const {movie, movieId, filmsMock, onMovieClick} = this.props;
    const {img, title} = movie;

    return <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`img/${img}`} alt={title} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <MovieTabs movieId={movieId} onTabClick={this.handleTabClick} activeTab={this.state.activeTab}/>
              {this._getScreenOutlet(movie)}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">

        <SimmilarMovie mocks={filmsMock} onMovieClick={onMovieClick} onMoviePageClick={this.handleMovieClick}/>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>;
  }
}

MoviePage.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string
  }).isRequired,
  filmsMock: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired
};
