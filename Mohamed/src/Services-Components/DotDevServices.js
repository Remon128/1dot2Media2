import React, { Component } from 'react';
import Title from './Title'
import Bullets from './Bullets'
import ImageComponent from './ImageComponent'
import ListComponent from './ListComponent'
import ServiceComponent from './ServiceComponent'
class DotDevServices extends Component {


  render() {
    const GrayColor = {
      background: "#fff"
    }
    return (
      <div className="DotDevServices">
        <ServiceComponent FirstTitle="System architecture" SecondTitle="and design" ImageLink='SystemArc&Design.png' first='Understanding' second='TV Camera'></ServiceComponent>
        <ServiceComponent style={GrayColor} FirstTitle="Software Development" SecondTitle="and design" ImageLink='SoftwareDevelopment.png' first='System Architecture' second='and Design'></ServiceComponent>
        <ServiceComponent FirstTitle="Software Security" SecondTitle="Services" ImageLink='SoftwareSecurityServices.png' first='Understanding' second='TV Camera'></ServiceComponent>
        <ServiceComponent style={GrayColor} FirstTitle="Mobile Solutions" SecondTitle="" ImageLink='MobileSeloutions.png' first='System Architecture' second='and Design'></ServiceComponent>
        <ServiceComponent FirstTitle="E-commerce Solution" SecondTitle="Services" ImageLink='EcommerceSolutions.png' first='Understanding' second='TV Camera'></ServiceComponent>
        <ServiceComponent style={GrayColor} FirstTitle="Web Hosting Solutions" SecondTitle="" ImageLink='WebHosting.png' first='System Architecture' second='and Design'></ServiceComponent>
        <ServiceComponent FirstTitle="Integrated Digital" SecondTitle="Marketing Strategy" ImageLink='IntergratedDegital.png' first='Understanding' second='TV Camera'></ServiceComponent>
        <ServiceComponent style={GrayColor} FirstTitle="Digital Advertising" SecondTitle="Marketing" ImageLink='DigitalAdvertising.png' first='System Architecture' second='and Design'></ServiceComponent>
        <ServiceComponent FirstTitle="Integrated Digital" SecondTitle="Rate Optimization" ImageLink='Analytics&conversion.png' first='Understanding' second='TV Camera'></ServiceComponent>


      </div>);
  }
}
export default DotDevServices;
