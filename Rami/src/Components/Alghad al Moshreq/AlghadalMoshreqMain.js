import React, { Component } from 'react';
import Main_View from './Main_View';
import Fonts from './Fonts';
import Main_Body from './Main_Body';
import MoreWork from './MoreWork';

class AlghadalMoshreqMain extends Component {
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

export default AlghadalMoshreqMain;
