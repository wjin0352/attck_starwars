import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';

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
    // console.log(this.props.location.state)
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
        return Promise.all(filmsRequests)
          .catch((err) => {
          console.log('Failed Promise.all, ', err);
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
        console.log('err: ', err)
        this.props.history.push({
          pathname: '/404'
        })
      })
  }

  render() {
    // if (this.state.results)
    console.log('empty? ',Object.keys(this.state.results).length === 0)
    if (Object.keys(this.state.results).length === 0) {   
      return (<div><h5>Loading...</h5></div>);
    };
    // console.log('loaded: ', this.state.results)
    return (
      <div>
        <h3>Character</h3>
        {console.log(this.state.results)}
      </div>
    );
  }
}

export default withRouter(CharacterCard);