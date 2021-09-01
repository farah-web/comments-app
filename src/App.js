import React from 'react'
import Header from './components/Header';
import Users from "./components/Users";
import Comments from './components/Comments';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route exact path='/'> <Users /></Route>
          <Route path='/comments'><Comments /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
