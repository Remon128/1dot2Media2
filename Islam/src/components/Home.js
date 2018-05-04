import React, {Component} from 'react';
import company from '../assets/company.jpg';
import mediaLogo from '../assets/mediaLogo.png';
import Service from '../components/Service';
import '../styles/homeStyles.css';
import HomeToolbar from '../components/HomeToolbar';
import HomeBody from '../components/HomeBody';

export default class Home extends Component {

    render() {

        return (
            <div>
                <HomeToolbar/>
                <HomeBody/>
            </div>
        );
    }
}
