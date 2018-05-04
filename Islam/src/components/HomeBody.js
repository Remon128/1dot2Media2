import React, {Component} from 'react';
import logo from '../assets/logo.png';
import '../styles/homeStyles.css';

export default class HomeBody extends Component {

    render() {
        return (
            <div className="bodyContent">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <br/>
                            <br/>
                            <button className="btn btn-primary serviceBtn">Services</button>
                        </div>

                        <div className="col-sm-6">
                            <div className="fullLogo">
                                <img
                                    src={logo}
                                    style={{
                                    width: 456,
                                    height: 332,
                                }}/>
                                <div
                                    className="logo"
                                    style={{
                                    padding: 12
                                }}>
                                    <h1 className="textColor">1dot2Media</h1>
                                    <p className="textColor">We focus on providing the most creative,
                                        <br/>
                                        innovative and profitable ways for the
                                        <br/>
                                        business sector.
                                        <br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <br/>
                            <br/>
                            <button className="btn btn-primary aboutBtn">About</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sw-6 white-block">
                        <p>We focus on providing the most creative,
                            <br/>
                            innovative and profitable ways for the
                            <br/>
                            business sector.
                            <br/>
                        </p>
                        <a data-toggle="collapse" data-target="#more-1">
                            <span className="glyphicon glyphicon-plus"></span>
                        </a>
                        <div className="caption">
                            <div id="more-1" className="collapse lead">this is more details info...</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}