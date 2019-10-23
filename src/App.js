import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Navigation from './components/Navigation';
import TaskList from './components/tasklist';
import EditTask from './components/listEdit';
import CreateList from './components/listCreate';

// Firebase Authenticaion 

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './config/firebaseConfig';


class App extends Component {
  render() { 

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <Router>
        <div>
          <Navigation />
          <div className="container">
            <Route path="/" exact component={TaskList} />
            <Route path="/edit/:id" component={EditTask} />
            <Route path="/create" component={CreateList} />
          </div>
        </div>
      </Router>
    );
  }
}

// export default App;

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);


