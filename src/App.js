import React, { Component } from 'react';
import logo from './logo.svg';
import List from './components/list'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Task List</h2>
        <List />
      </div>
    );
  }
}

export default App;
