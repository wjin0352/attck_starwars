import React, { Component } from 'react';
import MainPage from './MainPage';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>APP Component</h3>
        <MainPage/>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
