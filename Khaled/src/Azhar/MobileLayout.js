import React, { Component } from 'react';
import './../reset.css';
import './work.css';

class MobileLayout extends Component {
    constructor(props){
        super(props);
            this.state = {layouts:['images/mobile1.png','images/mobile2.png','images/mobile3.png']};
    }

    render(){
        return(
            <center>
                <div className="layout">
                    <h2>MOBILE LAYOUT</h2>
                    {this.state.layouts.map(layout => {
                        return (
                            <img src="layout" height="670px" width="375px" alt="mobile-layout"/>
                        );
                    })}
                </div>
            </center>
        );
    }
}

export default MobileLayout;