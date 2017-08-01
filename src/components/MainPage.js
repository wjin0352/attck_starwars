import React, { Component } from 'react';
import data from '../utils/characters';
import { 
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import CharacterCard from './CharacterCard';
import NotFound from './NotFound';
import axios from 'axios';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.getCharacter = this.getCharacter.bind(this);
    this.showCharacters = this.showCharacters.bind(this);
  }

  getCharacter(url) {
    // redirect to CharacterCard component
    this.props.history.push({
      pathname: '/characters',
      state: { url: url }
    });
  }

  showCharacters = () => {
    const list = data.characters.map((val, idx) => {
      return (
        <div className="characters_list" key={val.url} onClick={() => this.getCharacter(val.url)}>
          <a className="collection-item">
            <h4 className="grey-text">
              {val.name}
            </h4>
          </a>
        </div>
      );
    })
    return list;
  }

  render() {
    return (
      <div className="main_page">
        <div className="characters_cards collection">
          {this.showCharacters()}
        </div>
      </div>
    );
  }
}

export default withRouter(MainPage);
