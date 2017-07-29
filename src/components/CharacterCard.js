import React, { Component } from 'react';
import axios from 'axios';

class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      results: '' 
    }  

    this.getCharacterInfo = this.getCharacterInfo.bind(this);
  }

  componentDidMount(props) {
    this.getCharacterInfo(props)
  }

  getCharacterInfo() {
    console.log(this.props.location.state)
    const endpt = this.props.location.state.url;
    axios.get(`${endpt}`)
      .then((res) => {
        console.log(res.data.films);
        var characterData = res.data;
        var films = res.data.films;
        var filmsRequests = [];
        films.forEach((filmApiEndPt) => {
          // console.log('val, ', val);
          filmsRequests.push(axios.get(`${filmApiEndPt}`));
        })
        return Promise.all(filmsRequests)
          .catch((err) => {
          console.log('failed Promise.all, ', err);
          })
          .then((movies) => {
            console.log('successful Promise.all, ', movies)
            console.log('character Data, ', characterData)
            var results = {
              characterData,
              movies
            }
            this.setState({ results });
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    
    return (
      <div>
        <h3>Character</h3>
       {console.log(this.state.results)}
      </div>
    );
  }
}

export default CharacterCard;