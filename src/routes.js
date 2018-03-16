import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import App from './containers/App';
import Albums from './components/Albums';
import Album from './components/Album';

export default (
  <App>
    <Switch>
      <Route exact path="/" component={ Albums } />
      <Route strict path="/album/:id" component={ Album } />
    </Switch>
  </App>
);
