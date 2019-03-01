import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="overlay"></div>
    <div class="keys">
        <div data-key="65" class="key">
            <kbd>A</kbd>
            <span class="sound">Arrow</span>
        </div>
        <div data-key="83" class="key">
            <kbd>S</kbd>
            <span class="sound">Sword</span>
        </div>
        <div data-key="68" class="key">
            <kbd>D</kbd>
            <span class="sound">Monster</span>
        </div>
        <div data-key="70" class="key">
            <kbd>F</kbd>
            <span class="sound">Fireball</span>
        </div>
        <div data-key="71" class="key">
            <kbd>G</kbd>
            <span class="sound">Creaky</span>
        </div>
        <div data-key="72" class="key">
            <kbd>H</kbd>
            <span class="sound">Thunder</span>
        </div>
        <div data-key="74" class="key">
            <kbd>J</kbd>
            <span class="sound">Wind</span>
        </div>
        <div data-key="75" class="key">
            <kbd>K</kbd>
            <span class="sound">Dripping</span>
        </div>
        <div data-key="76" class="key">
            <kbd>L</kbd>
            <span class="sound">Spell</span>
        </div>
    </div>
      </div>
    );
  }
}

export default App;
