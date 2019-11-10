import React from "react";
import PropTypes from "prop-types";

import VideoPlayer from "../video-player/video-player";

export const Movie = (props) => {
  const {film, id, onMovieEnter, onMovieLeave, onMovieClick, onMoviePageClick, isPlaying} = props;
  const {img, title, preview} = film;

  const handleMovieClick = (evt) => {
    evt.preventDefault();

    onMovieClick(id);
    if (onMoviePageClick) {
      onMoviePageClick();
    }
    history.pushState(null, null, `/movie-${id}-overview`);
  };

  return <article
    className="small-movie-card catalog__movies-card"
    onClick={handleMovieClick}
    onMouseEnter={onMovieEnter}
    onMouseLeave={onMovieLeave}
  >
    <div className="small-movie-card__image">
      <VideoPlayer
        src={preview}
        poster={`img/${img}`}
        muted={true}
        width={280}
        height={175}
        playerState={isPlaying}
      />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href={`/movie-${id}-overview`}>{title}</a>
    </h3>
  </article>;
};

Movie.propTypes = {
  film: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    preview: PropTypes.string
  }).isRequired,
  id: PropTypes.number.isRequired,
  onMovieClick: PropTypes.func.isRequired,
  onMoviePageClick: PropTypes.func,
  onMovieEnter: PropTypes.func,
  onMovieLeave: PropTypes.func,
  isPlaying: PropTypes.bool
};
