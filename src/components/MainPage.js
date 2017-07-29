import React, { Component } from 'react';
import data from '../utils/characters';
import { Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.getCharacter = this.getCharacter.bind(this);
    this.showCharacters = this.showCharacters.bind(this);
  }

  getCharacter(url) {
    console.log(url)
    // redirect to CharacterCard component
    // this.props.history.push('/characters');
    this.props.history.push({
      pathname: '/characters',
      state: { url: url }
    });
    
  }

  showCharacters = () => {
    const list = data.characters.map((val, idx) => {
      return (
        <div className="characters_list" key={val.url} onClick={() => this.getCharacter(val.url)}>
          <h4>{val.name}</h4>
        </div>
      );
    })
    return list;
  }

  render() {
    return (
      <div className="main_page">
        <header>Star Wars Header</header>
        <div className="characters_cards">{this.showCharacters()}
        </div>
        <h3>Main Page</h3>
      </div>
    );
  }
}

export default withRouter(MainPage);
