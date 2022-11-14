/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { About } from './pages/About';
import { Home } from './pages/Home';


export function Application() {
  return (
    <div>
      <nav>
        <Link data-testid="link-home" to="/">Home</Link>
        <Link to="/homework_build_react_app/about">About</Link>
      </nav>
      <Switch>
        <Route path="/homework_build_react_app/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
