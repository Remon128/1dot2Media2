import React, { Component } from 'react';
import './App.css';
import Main_View from './Components/Main_View';
import Fonts from './Components/Fonts';
import Main_Body from './Components/Main_Body';
import MoreWork from './Components/MoreWork';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Main_View />
      <Fonts />
      <Main_Body />
      <MoreWork />
        </div>
    );
  }
}

export default App;
