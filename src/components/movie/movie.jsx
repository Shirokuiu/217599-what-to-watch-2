import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import VideoPlayer from "../video-player/video-player";

import {ActionCreator} from "../../reducer";

export const Movie = (props) => {
  const {movie, onMovieEnter, onMovieLeave, isPlaying, onMovieClick} = props;
  const {previewImage, name, previewVideoLink, id} = movie;

  const handleMovieClick = () => {
    onMovieClick(id - 1);
  };

  return <Link
    to={`/movie/${id}/overview`}
    className="small-movie-card catalog__movies-card"
    onMouseEnter={onMovieEnter}
    onMouseLeave={onMovieLeave}
    onClick={handleMovieClick}
  >
    <div className="small-movie-card__image">
      <VideoPlayer
        src={previewVideoLink}
        poster={previewImage}
        muted={true}
        width={280}
        height={175}
        playerState={isPlaying}
      />
    </div>
    <h3 className="small-movie-card__title">
      <span className="small-movie-card__link">{name}</span>
    </h3>
  </Link>;
};

Movie.propTypes = {
  movie: PropTypes.shape({
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
    starrings: PropTypes.array.string,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  }).isRequired,
  onMovieEnter: PropTypes.func,
  onMovieLeave: PropTypes.func,
  isPlaying: PropTypes.bool,
  onMovieClick: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  onMovieClick: (movieId) => {
    dispatch(ActionCreator.updateCurrentMovie(movieId));
  }
});

export default connect(null, mapDispatchToProps)(Movie);
