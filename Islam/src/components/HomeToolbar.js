import React, {Component} from 'react';
import company from '../assets/company.jpg';
import logo from '../assets/logo.png';
import mediaLogo from '../assets/mediaLogo.png';
import Service from '../components/Service';
import '../styles/homeStyles.css';

export default class HomeToolbar extends Component {

    render() {

        return (
            <div className="toolbarHomeStyle">
                <div className="row">
                    <div
                        className="col-md-4"
                        style={{
                        padding: 32
                    }}>
                        <img src={mediaLogo}/>
                    </div>

                    <div
                        className="col-md-8"
                        style={{
                        marginTop: 24,
                        alignSelf: 'flex-end'
                    }}>
                        <div className="dropdown">
                            <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                style={{
                                height: '100%'
                            }}>
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="./services.html">Services</a>
                                </li>
                                <li>
                                    <a href="#">Our Clients</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Portoflio</a>
                                </li>
                                <li>
                                    <a href="#">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}