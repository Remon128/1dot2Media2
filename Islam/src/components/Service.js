import React, {Component} from 'react';
import company from '../assets/company.jpg';
import logo from '../assets/logo.png';
import dev from '../assets/dev.png';
import mediaLogo from '../assets/mediaLogo.png';
import '../styles/homeStyles.css';
import ServiceToolbar from './ServiceToolbar';
import ServiceBody from './ServiceBody';

export default class Service extends Component {

    render() {

        return (
            <div>
                <ServiceToolbar/>
                <ServiceBody/>
            </div>
        );
    }
}
