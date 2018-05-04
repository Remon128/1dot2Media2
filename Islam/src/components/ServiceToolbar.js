import React,{Component} from 'react';
import company from '../assets/company.jpg';
import logo from '../assets/logo.png';
import dev from '../assets/dev.png';
import mediaLogo from '../assets/mediaLogo.png';
import '../styles/homeStyles.css';
export default class ServiceToolbar extends Component {

    render() {

        return (
            <div class="row">
                <div
                    class="col-md-4"
                    style={{
                    padding: 32
                }}>
                    <img src={mediaLogo}/>
                </div>

                <div class="col-md-8">
                    <div
                        class="dropdown"
                        style={{
                        alignSelf: 'flex-end',
                        margin: 32
                    }}>
                        <button
                            class="btn btn-primary dropdown-toggle"
                            type="button"
                            data-toggle="dropdown">
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-right">
                            <li>
                                <a href="./home.html">Home</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
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

        );
    }
}