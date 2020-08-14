import React, { Component } from "react";
import "./App.css";
import Smurfs from './Smurfs';
import Form from './Form';
import { Route, Switch } from 'react-router-dom';
import SmurfProfile from './SmurfProfile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <Switch>

        <Route exact path='/:id'>
          <SmurfProfile />
        </Route>

        <Route path='/'> 
        <Form />
        <Smurfs />
        </Route>

        </Switch>
      </div>
    );
  }
}

export default App;
