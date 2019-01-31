/**
 * Copyright © 2018 Elastic Path Software Inc. All rights reserved.
 *
 * This is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this license. If not, see
 *
 *     https://www.gnu.org/licenses/
 *
 *
 */

import React from 'react';
import {
  BrowserRouter as Router, Switch, withRouter, Route,
} from 'react-router-dom';
import router from './routes';

import './App.less';

// eslint-disable-next-line react/no-array-index-key
const routeComponents = router.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />);

const Root = () => [
  <div key="app-content" className="app-content vertical-center">
    <Switch>
      {routeComponents}
    </Switch>
  </div>,
];

const App = withRouter(Root);
const AppWithRouter = () => (
  <Router basename="/auth/">
    <App />
  </Router>
);
export default AppWithRouter;
