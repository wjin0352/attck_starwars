import React, { Component } from 'react';
import { Redirect, withRouter, Route } from 'react-router-dom';
import MainPage from './MainPage';
import MovieCard from './MovieCard';
import axios from 'axios';
import Spinner from 'react-spinner';

class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      results: {}
    }  

    let loaded = false;
    this.getCharacterInfo = this.getCharacterInfo.bind(this);
  }

  componentWillMount(props) {
    this.getCharacterInfo(props)
  }

  getCharacterInfo() {
    const endpt = this.props.location.state.url;

    axios.get(`${endpt}`)
      .then((res) => {
        console.log('res: ', res)
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

  render() {
    const { results } = this.state;
    if (Object.keys(results).length === 0) {   
      return (<div className="loading_screen">Loading...</div>);
    };
    
    return (
      <div>
        <div className="character_card_name">
          <h3>{results.characterData.name}</h3>
        </div>

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

        <MovieCard movie={results.movies[0].data}/>
        <MovieCard movie={results.movies[1].data}/>
        <MovieCard movie={results.movies[2].data}/>

        
      </div>
    );
  }
}

export default withRouter(CharacterCard);