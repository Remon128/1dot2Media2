import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import App_screen from './Components/App_screen';
import Mobile from './Components/Mobile';
import Fonts from './Components/Fonts';
import Prototypes from './Components/Prototypes';
import MoreWorks from './Components/MoreWorks';
import Footer from './Components/Footer';
import DesktopLayout from './Components/DesktopLayout';
import Widgets from './Components/Widgets';
import MobApp from './Components/MobApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Fonts />
        <Prototypes />
        <Mobile />
        <DesktopLayout />
        <App_screen />
        <Widgets />
        <MobApp />
        <MoreWorks />
        <Footer />
      </div>
    );
  }
}

export default App;
