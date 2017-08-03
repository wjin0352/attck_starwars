// @flow

import React, { Component } from 'react';
import { shape, object } from 'prop-types';
import { withRouter } from 'react-router-dom';
import MovieCard from './MovieCard';
import axios from 'axios';

class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      results: {}
    }  

    this.getCharacterInfo = this.getCharacterInfo.bind(this);
    this.prepareMovieCards = this.prepareMovieCards.bind(this);
  }

  componentWillMount(props) {
    this.getCharacterInfo(props)
  }

  getCharacterInfo() {
    const endpt = this.props.location.state.url;

    axios.get(`${endpt}`)
      .then((res) => {
        var characterData = res.data;
        var films = res.data.films;
        var filmsRequests = [];

        films.forEach((filmApiEndPt) => {
          filmsRequests.push(axios.get(`${filmApiEndPt}`));
        })

        Promise.all(filmsRequests)
          .catch((err) => {
          console.log('Promise.all request Error: ', err);
          })
          .then((movies) => {
            this.setState({
              results: {
                characterData,
                movies
              }
            })
          })
      })
      .catch((err) => {
        console.log('Initial Request Error: ', err)
        this.props.history.push({
          pathname: '/404'
        })
      })
  }

  characterInfoTable() {
    const { results } = this.state;
    return (
      <table className="character_table striped centered">
        <tbody>
          <tr>
            <td>Height:</td>
            <td>{results.characterData.height}</td>
          </tr>
          <tr>
            <td>Mass:</td>
            <td>{results.characterData.mass}</td>
          </tr>
          <tr>
            <td>Hair Color:</td>
            <td>{results.characterData.hair_color}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{results.characterData.gender}</td>
          </tr>
          <tr>
            <td>Eye Color:</td>
            <td>{results.characterData.eye_color}</td>
          </tr>
          <tr>
            <td>Skin Color:</td>
            <td>{results.characterData.skin_color}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  
  prepareMovieCards() {
    const { movies } = this.state.results;
    return (
      <div>
        { 
          movies.map((obj) => (
            <MovieCard movie={obj.data} key={obj.data.created} />
          ))
        }
      </div>
    );
  }

  render() {
    const { results } = this.state;

    // Logic to show user 'loading' screen until movies have loaded
    if (Object.keys(results).length === 0) {   
      return (<div className="loading_screen"><h5>Loading...</h5></div>);
    };
    
    return (
      <div>
        <div className="character_card_name">
          <h3>{results.characterData.name}</h3>
        </div>

        {this.characterInfoTable()}

        {this.prepareMovieCards()}
      </div>
    );
  }
}

CharacterCard.propTypes = {
  location: shape({
    state: object.isRequired
  }),
  history: object.isRequired 
};

export default withRouter(CharacterCard);