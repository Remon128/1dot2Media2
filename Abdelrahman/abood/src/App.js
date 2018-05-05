import React, { Component } from 'react';

import './style.css';

import First from './Components/First';
import Third from './Components/Third';
import Fourth from './Components/Fourth';
import Fifth from './Components/Fifth';
import Second from './Components/Second';
import Extension_to_first from './Components/Extension_to_first';
class App extends Component {
  render() {
    return (
      <div className="">
      
       <First/>
       <Extension_to_first/>
      <Second/>
       <Third/>
       <Fourth/>
       <Fifth/>
      </div>
    );
  }
}

export default App;
