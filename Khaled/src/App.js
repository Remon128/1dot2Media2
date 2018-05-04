import React, { Component } from 'react';
import Header from './Noon/Header';
import Overview from './Noon/Overview';
import ColorsList from './Noon/ColorsList';
import HomePage from './Noon/HomePage'
import InternalPages from './Noon/InternalPages';
import MobileLayout from './Noon/MobileLayout';
import './reset.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Overview />
        <ColorsList />
        <HomePage/>
        <InternalPages/>
        <MobileLayout/>
      </div>
    );
  }
}

export default App;
