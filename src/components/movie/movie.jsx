import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import VideoPlayer from "../video-player/video-player";

export const Movie = (props) => {
  const {movie, onMovieEnter, onMovieLeave, isPlaying} = props;
  const {previewImage, name, previewVideoLink, id} = movie;

  return <Link
    to={`/movie/${id}/overview`}
    className="small-movie-card catalog__movies-card"
    onMouseEnter={onMovieEnter}
    onMouseLeave={onMovieLeave}
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
    starring: PropTypes.array.string,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
  }).isRequired,
  onMovieEnter: PropTypes.func,
  onMovieLeave: PropTypes.func,
  isPlaying: PropTypes.bool
};
