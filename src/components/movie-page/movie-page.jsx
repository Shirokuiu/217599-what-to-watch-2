import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";

import MovieReviews from "../movie-review/movie-reviews";
import MovieControls from "../movie-controls/movie-controls";
import {Header} from "../header/header";
import {MovieTabs} from "../movie-tabs/movie-tabs";
import {SimmilarMovie} from "../simmilar-movie/simmilar-movie";
import {MovieOverview} from "../movie-overview/movie-overview";
import {MovieDetail} from "../movie-detail/movie-detail";
import {Footer} from "../footer/footer";

import {Operation} from "../../reducer";

import {withMovieControls} from "../../hocs/with-movie-controls/with-movie-controls";

const MovieControlsWrapped = withMovieControls(MovieControls);

export const MoviePage = (props) => {
  const PARENT_STATUS = `MOVIE_PAGE`;

  const {movies, currentMovie, history, onUpdateIsFavorite} = props;

  const {backgroundColor, backgroundImage, name, genre, released, isFavorite, posterImage, id} = currentMovie;
  let simmilarMovies = [];

  const getSimilarMovies = (films) => {
    simmilarMovies = films.filter((film) => film.genre === currentMovie.genre).slice(0, 4)
      .filter((film) => film.id !== id);
  };

  const handleFavoriteClick = () => {
    onUpdateIsFavorite();
  };

  getSimilarMovies(movies);

  return <>
    <section className="movie-card movie-card--full" style={{background: backgroundColor}}>
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <MovieControlsWrapped
              history={history}
              parent={PARENT_STATUS}
              movieId={id - 1}
              favorite={isFavorite}
              onFavoriteClick={handleFavoriteClick}
            />
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={posterImage} alt={name} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <MovieTabs id={id}/>
            <Switch>
              <Route
                path={`/movie/${id}/overview`}
                render={(prop) => <MovieOverview {...prop} movie={currentMovie} />}
                exact
              />
              <Route
                path={`/movie/${id}/details`}
                render={(prop) => <MovieDetail {...prop} movie={currentMovie} />}
                exact
              />
              <Route
                path={`/movie/${id}/reviews`}
                render={(prop) => <MovieReviews {...prop} movieId={id}/>}
                exact
              />
            </Switch>
          </div>
        </div>
      </div>
    </section>
    <div className="page-content">

      {simmilarMovies.length ? <SimmilarMovie simmilarMovies={simmilarMovies}/> : null}

      <Footer />
    </div>
  </>;
};

MoviePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array.string,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool
  })).isRequired,
  currentMovie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array.string,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool
  }).isRequired,
  history: PropTypes.object.isRequired,
  onUpdateIsFavorite: PropTypes.func
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateIsFavorite: () => {
    dispatch(Operation.loadMovies());
    dispatch(Operation.loadPromo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
