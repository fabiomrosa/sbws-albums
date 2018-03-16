import React from 'react'; 
import { Route, Switch } from 'react-router'
import App from './containers/App';
import Albums from './components/Albums';

export default (
  <App>
    <Switch>
      <Route exact path="/" component={ Albums } />
    </Switch>
  </App>
);
