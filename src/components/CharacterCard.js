import React, { Component } from 'react';
import axios from 'axios';

class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.getCharacterInfo = this.getCharacterInfo.bind(this);
  }

  componentDidMount(props) {
    this.getCharacterInfo(props)
  }

  getCharacterInfo(props) {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <h3>Character</h3>
      </div>
    );
  }
}

export default CharacterCard;