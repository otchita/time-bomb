import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './pages/Game/Game';
import Lobby from './pages/Lobby/Lobby';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game/:id" component={Game} />
        <Route path="/" component={Lobby}></Route>
      </Switch>
    </Router>
  );
}
