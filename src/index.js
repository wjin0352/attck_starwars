import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './index.css';
import App from './components/App';
import CharacterCard from './components/CharacterCard';
import MainPage from './components/MainPage';
import registerServiceWorker from './registerServiceWorker';

const router = (
  <BrowserRouter> 
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/characters" component={CharacterCard}/>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
