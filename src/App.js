import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Locked from './components/pages/Locked';
import Login from './components/auth/Login';

import './App.css';

function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-366832.okta.com/oauth2/default"
          client_id="0oa1vrvbj1fPGz8ou357"
          redirect_uri='http://localhost:3000//implicit/callback'
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Navbar />
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/locked" exact={true} component={Locked} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-366832.okta.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
