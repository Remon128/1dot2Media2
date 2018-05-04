import React, { Component } from 'react';
import './../reset.css';
import './work.css';


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            logo:"https://upload.wikimedia.org/wikipedia/commons/2/25/Al-Azhar_University_Minaret.jpg"
        }
    }
    
    render() {
        return (
            <header>
                <img src={this.state.logo} className="logo" alt = 'AzharLogo'/>
            </header>
        );
    }
}

export default Header;