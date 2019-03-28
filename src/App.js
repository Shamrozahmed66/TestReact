import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="nav" id="div1">
        <ul>
          <li><a href="#home" id="a1">Home </a></li>
          <li><a href="#gallery" id="a2">Gallery </a></li>
          <li><a href="#contact" id="a3">Contact Us </a></li>
          <li><a href="#project" id="a4">Projects </a></li>
          <li><a href="#signup" id="a5">Sign up </a></li>
        </ul>
      </div>

    );
  }
}

export default App;
