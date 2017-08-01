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
import NavBar from './components/NavBar';
import CharacterCard from './components/CharacterCard';
import MainPage from './components/MainPage';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';

const router = (
  <BrowserRouter> 
    <App />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
