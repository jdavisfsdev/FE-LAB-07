import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Image from '../Image';
import List from '../List';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>

        <Route path="/" exact={true}>
          <List />
        </Route>

        <Route path="/:id" exact={true}>
          <Image />
        </Route>

      </Switch>
    </Router>
  );
}
