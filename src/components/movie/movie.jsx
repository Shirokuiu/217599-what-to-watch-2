import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import VideoPlayer from "../video-player/video-player";

export default class Movie extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this.timerId = null;
    this.HOVER_DELAY = 1000;

    this._handleMovieClick = this._handleMovieClick.bind(this);
    this._handleMovieEnter = this._handleMovieEnter.bind(this);
    this._handleMovieLeave = this._handleMovieLeave.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  _handleMovieClick(evt) {
    evt.preventDefault();

    const {id, onMovieClick, onMoviePageClick} = this.props;

    onMovieClick(id);
    if (onMoviePageClick) {
      onMoviePageClick();
    }
    history.pushState(null, null, `/movie-${id}-overview`);
  }

  _handleMovieEnter() {
    this.timerId = setTimeout(() => {
      this.setState({isPlaying: true});
    }, this.HOVER_DELAY);
  }

  _handleMovieLeave() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.setState({isPlaying: false});
    }
  }

  render() {
    const {film, id} = this.props;
    const {img, title, preview} = film;

    return <article
      className="small-movie-card catalog__movies-card"
      onClick={this._handleMovieClick}
      onMouseEnter={this._handleMovieEnter}
      onMouseLeave={this._handleMovieLeave}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          src={preview}
          poster={`img/${img}`}
          muted={true}
          width={280}
          height={175}
          playerState={this.state}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={`/movie-${id}-overview`}>{title}</a>
      </h3>
    </article>;
  }
}

Movie.propTypes = {
  film: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    preview: PropTypes.string
  }).isRequired,
  id: PropTypes.number.isRequired,
  onMovieClick: PropTypes.func.isRequired,
  onMoviePageClick: PropTypes.func
};
