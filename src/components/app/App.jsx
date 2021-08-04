import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../List';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <List />
        </Route>
      </Switch>
    </Router>
  );
}
