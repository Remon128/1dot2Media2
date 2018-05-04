import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import App_screen from './App_screen';
import Mobile from './Mobile';
import Fonts from './Fonts';
import Prototypes from './Prototypes';
import MoreWorks from './MoreWorks';
import Footer from './Footer';
import DesktopLayout from './DesktopLayout';
import Widgets from './Widgets';
import MobApp from './MobApp';

class DotemiratesMain extends Component {
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

export default DotemiratesMain;
