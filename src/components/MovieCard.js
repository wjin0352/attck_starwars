import React, { Component } from 'react';
import { string, shape } from 'prop-types';

class MovieCard extends Component {

  render() {
    const date = new Date(this.props.movie.release_date);
    const movie = this.props.movie;
    console.log(movie)
    return (
      <div className="row activator" >
        <div className="col s12 m6 movie_card">
          <div className="card blue darken-1 hoverable">
            <div className="card-content white-text">
              <span className="card-title">
                { movie.title }
              </span>
              <h6>
                Release date: {date.toDateString()}
              </h6>
              <h6>
                Director: { movie.director }
              </h6>
              <p>
                Producers: {movie.producer}
              </p>
            </div>
            <div className="card-action">
            </div>
            
            <span className="card-title activator grey-text white-text ">More Info<i className="material-icons right">more_vert</i></span>

            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
              <p>{movie.opening_crawl}</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes ={
  movie: shape({
    director: string.isRequired,
    producer: string.isRequired,
    opening_crawl: string.isRequired
  })
}

export default MovieCard;

