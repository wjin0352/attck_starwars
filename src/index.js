import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './index.css';
import App from './components/App';
import Stuff from './components/Stuff';
import registerServiceWorker from './registerServiceWorker';

const router = (
  <BrowserRouter> 
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/stuff" component={Stuff}/>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
