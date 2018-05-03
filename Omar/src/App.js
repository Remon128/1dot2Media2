import React, { Component } from 'react';
import './App.css';
import Noon from './Part/Noon.js'
import Azhr from './Part/AlAzhr.js'
import Ghad from './Part/Ghad.js'
import WAM from './Part/wam.js'
import ErrorPage from './errorPage/errorFunction.js';
import Logo from './Part/logos.js'
import ContactUs from './ContactUs/contactUs.js';
import ContactForm from './ContactUs/contactForm.js';
import Map from './ContactUs/map.js';


class App extends Component {

  render() {

    return ( 

      <div>
        <Noon  />

        <WAM/>
   
        <Azhr />
        <Ghad />
        <Logo></Logo>

        <ContactUs></ContactUs>
        <ContactForm></ContactForm>
        <Map></Map>

        <ErrorPage></ErrorPage>
      
      
      </div>
     );

  
  }
}

export default App;
