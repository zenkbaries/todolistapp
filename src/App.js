import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';

class App extends Component {
  render() { 
    return (
      <div>
        <Navigation />
        <div className="container">
          <h1>Todo List App</h1>
        </div>
      </div>
    );
  }
}

export default App;
