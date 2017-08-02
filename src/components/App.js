import React, { Component } from 'react';
import { 
  Switch,
  Route
} from 'react-router-dom';
import CharacterCard from './CharacterCard';
import MainPage from './MainPage';
import NotFound from './NotFound';
import NavBar from './NavBar';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/characters" component={CharacterCard} />
          <Route path="/404" component={NotFound} />
          <Route path="*" component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
