import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './index.css';
import App from './components/App';
import CharacterCard from './components/CharacterCard';
import MainPage from './components/MainPage';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';

const router = (
  <BrowserRouter> 
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/characters" component={CharacterCard} />
      <Route path="/404" component={NotFound} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
