import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './styles/style.css';

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
