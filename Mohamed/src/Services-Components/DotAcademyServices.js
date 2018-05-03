import React, { Component } from 'react';
import Title from './Title'
import Bullets from './Bullets'
import ImageComponent from './ImageComponent'
import ListComponent from './ListComponent'
import ServiceComponent from './ServiceComponent'
class DotAcademyServices extends Component {
  render() {
    const GrayColor = {
      background: "#fff"
    }
    return (<div>
      <ServiceComponent FirstTitle="Understanding" SecondTitle="TV Camera" ImageLink='Object3.png' first='Understanding' second='TV Camera'></ServiceComponent>
      <ServiceComponent style={GrayColor} FirstTitle="News Reporting" SecondTitle="Video Preparations" ImageLink='newsReporting1.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent FirstTitle="TV Editing" SecondTitle="" ImageLink='tv_editing.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent style={GrayColor} FirstTitle="iOS/Android MOJO video" SecondTitle="and photography editing" ImageLink='iosAndroidMOJO.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent FirstTitle="TV Editing" SecondTitle="" ImageLink='tv_editing.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent style={GrayColor} FirstTitle="BroadCasting" SecondTitle="" ImageLink='BroadCasting.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent FirstTitle="Spkes Person" SecondTitle="" ImageLink='spkesperson.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent style={GrayColor} FirstTitle="TV Reporting" SecondTitle="" ImageLink='TVReporting.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent FirstTitle='System Architecture' SecondTitle='and Design' ImageLink='visualstorytelling.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent style={GrayColor} FirstTitle="Content Marketing" SecondTitle='' ImageLink='ContentMarketing.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent FirstTitle="Social media" SecondTitle='Managment' ImageLink='social_media.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent style={GrayColor} FirstTitle="Facebook & instgrma" SecondTitle='Advertising' ImageLink='social_media.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent FirstTitle="Twitter Advertising" SecondTitle='' ImageLink='twitter.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent style={GrayColor} FirstTitle="Mobile Marketing" SecondTitle='' ImageLink='mobileMarketing.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent FirstTitle="Google AdWords" SecondTitle='' ImageLink='google_adWords.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent style={GrayColor} FirstTitle="Search Engine Optimization" SecondTitle='' ImageLink='search.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent FirstTitle="Email Marketing" SecondTitle='' ImageLink='email.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent style={GrayColor} FirstTitle="Photography" SecondTitle='' ImageLink='Photography.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent FirstTitle="Online Journalism" SecondTitle='' ImageLink='onlineJournalism.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent style={GrayColor} FirstTitle="In-Depth Journalism" SecondTitle='' ImageLink='inDepthJournalism.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent FirstTitle="TV Directing" SecondTitle='' ImageLink='TvDirecting.png' first='System Architecture' second='and Design'></ServiceComponent>
      <ServiceComponent style={GrayColor} FirstTitle="In-Depth Journalismg" SecondTitle='' ImageLink='inDepthJournalism2.png' first='System Architecture' second='and Design'></ServiceComponent>
    </div>);
  }
}
export default DotAcademyServices;
