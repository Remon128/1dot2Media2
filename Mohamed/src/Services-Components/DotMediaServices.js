import React, { Component } from 'react';
import Title from './Title'
import Bullets from './Bullets'
import ImageComponent from './ImageComponent'
import ListComponent from './ListComponent'
import ServiceComponent from './ServiceComponent'
import DMSlist from './DMSlist';
import DMScomponent from './DMScomponent'
class DotMediaServices extends Component {


  render() {
    const GrayColor = {
      background: "#fff"
    }
    return (
      <div className="DotMediaServices">
        <DMScomponent FirstTitle="FILM & TV" SecondTitle="EQUIPMENTS RENTAL" ImageLink='Film&TVpng.png' ></DMScomponent>
        <DMScomponent style={GrayColor} FirstTitle="FILM CREW" SecondTitle=" " ImageLink='FilmCrew.png' ></DMScomponent>
        <DMScomponent FirstTitle="FILM & TV" SecondTitle="LOCATION PERMISSION" ImageLink='LocationPermission.png' ></DMScomponent>
        <DMScomponent style={GrayColor} FirstTitle="POST PRODUCTION" SecondTitle=" " ImageLink='PostProduction.png' ></DMScomponent>


      </div>);
  }
}
export default DotMediaServices;
