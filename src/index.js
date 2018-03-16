import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './styles/style.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={ history }>
    { routes }
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
