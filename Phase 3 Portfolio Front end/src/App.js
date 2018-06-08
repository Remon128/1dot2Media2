import React, { Component } from 'react';
import './App.css';
import Noon from './Part/Noon.js'
import Azhr from './Part/AlAzhr.js'
import Ghad from './Part/Ghad.js'
import WAM from './Part/wam.js'
import Logos from './Part/logos'
import axios from 'axios'
class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      Profilo: [],
      logos: [],
    };
  }
  componentDidMount() {


    axios.get('http://localhost:3000/portfolio/All')
      .then((response) => {
        this.setState({ Profilo: response.data.doc });
        console.log(this.state.Profilo);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get('http://localhost:3000/portfolioFooter/All')
      .then((response) => {
        this.setState({ logos: response.data.doc });
        console.log(this.state.logos);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  render() {
    return (

      <div>
        <Noon title={this.state.Profilo[0] && this.state.Profilo[0].Title}
          image={this.state.Profilo[0] && this.state.Profilo[0].ImageUrl}
          Desc={this.state.Profilo[0] && this.state.Profilo[0].Description} />

        <WAM title={this.state.Profilo[1] && this.state.Profilo[1].Title}
          image={this.state.Profilo[1] && this.state.Profilo[1].ImageUrl}
          Desc={this.state.Profilo[1] && this.state.Profilo[1].Description} />

        <Azhr title={this.state.Profilo[2] && this.state.Profilo[2].Title}
          image={this.state.Profilo[2] && this.state.Profilo[2].ImageUrl}
          Desc={this.state.Profilo[2] && this.state.Profilo[2].Description} />

        <Ghad title={this.state.Profilo[3] && this.state.Profilo[3].Title}
          image={this.state.Profilo[3] && this.state.Profilo[3].ImageUrl}
          Desc={this.state.Profilo[3] && this.state.Profilo[3].Description} />

        <Logos ImageUrl_OM={this.state.logos[0] && this.state.logos[0].ImageUrl}
          ImageUrl_ElGhad={this.state.logos[1] && this.state.logos[1].ImageUrl}
          ImageUrl_Emarat={this.state.logos[2] && this.state.logos[2].ImageUrl}
          ImageUrl_Khalefa={this.state.logos[3] && this.state.logos[3].ImageUrl}
          ImageUrl_Azhar={this.state.logos[4] && this.state.logos[4].ImageUrl}

        />

      </div >
    );


  }
}

export default App;
