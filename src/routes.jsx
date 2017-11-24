// Dependences
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>

export default AppRoutes;
