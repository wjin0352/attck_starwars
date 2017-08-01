import React, { Component } from 'react';

class MovieCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const date = new Date(this.props.movie.release_date);
    return (
      <div className="row activator" >
        <div className="col s12 m6 movie_card">
          <div className="card blue darken-1 hoverable">
            <div className="card-content white-text">
              <span className="card-title">
                { this.props.movie.title }
              </span>
              <h6>
                Release date: {date.toDateString()}
              </h6>
              <h6>
                Director: { this.props.movie.director }
              </h6>
              <p>
                Producers: {this.props.movie.producer}
              </p>
            </div>
            <div className="card-action">
            </div>
            
            <span className="card-title activator grey-text white-text ">More Info<i className="material-icons right">more_vert</i></span>

            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
              <p>{this.props.movie.opening_crawl}</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;