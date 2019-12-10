import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Header} from "../header/header";
import {AddReviewForm} from "../add-review-form/add-review-form";

import {withAddReviewForm} from "../../hocs/with-add-review-form/with-add-review-form";

const AddReviewFormWrapped = withAddReviewForm(AddReviewForm);

export const AddReviewPage = (props) => {
  const {match, movies, history} = props;
  const PARENT_STATUS = `ADD_REVIEW`;
  const {params} = match;
  const movieId = params.movieId - 1;
  const movie = movies[movieId];

  return <>
    {movies.length ? <section className="movie-card movie-card--full" style={{background: movie.backgroundColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={movie.backgroundImage} alt={movie.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header parent={PARENT_STATUS} movieId={movieId} movies={movies}/>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={movie.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">

        <AddReviewFormWrapped movieId={params.movieId} history={history}/>
      </div>

    </section> : null}
  </>;
};

AddReviewPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string
    })
  }),
  history: PropTypes.object.isRequired,
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
    isFavorite: PropTypes.bool,
  })).isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: state.movies
});

export default connect(mapStateToProps)(AddReviewPage);
