import React from 'react';
import { Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Todo from '../todo/todo';
import About from '../about/about';

export default props => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/todos' component={Todo} />
        <Route exact path='/about' component={About} />
        <Route component={Todo} />
      </Switch>
    </div>
  </BrowserRouter>
)