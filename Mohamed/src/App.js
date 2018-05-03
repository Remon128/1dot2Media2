import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ServiceComponent from './Services-Components/ServiceComponent'
import DotAcademyServices from './Services-Components/DotAcademyServices';
import DotDevServices from './Services-Components/DotDevServices';
import DMScomponent from './Services-Components/DMScomponent'
import DotMediaServices from './Services-Components/DotMediaServices'
class App extends Component {

  render() {
    const GrayColor = {
      background: "white"
    }
    return (
      <div className="App">
        <DotMediaServices></DotMediaServices>
      </div>);



  }
}
export default App;
