import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import TitlePage from './containers/TitlePage';
import LobbyPage from './containers/LobbyPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.LOBBY} component={LobbyPage} />
      <Route path={routes.TITLE} component={TitlePage} />
    </Switch>
  </App>
);
