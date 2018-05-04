import React from 'react';
import "./../Components props.css";
import Colours from './Colours';
import BackGround from './BackGround';
import HomePage from './HomePage';
import Compimgs from './CompImgs';
import HeadLines from './HeadLines';
import MobileLayout from './MobileLayout';
const Main_Body = () => {
    return (
        <div>
            <Colours />
            <BackGround />
            <HomePage />
            <Compimgs />
            <HeadLines />
            <MobileLayout />
        </div>
    );
}
export default Main_Body;
