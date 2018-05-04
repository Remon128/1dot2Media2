import React, { Component } from 'react';
import './../reset.css';
import './work.css';


class Overview extends Component {
    constructor(props){
        super(props);
        this.state={ 
            text : "Our talented designers has created the web application that suits the millennials and all the users to check and get the "+
                    "best of all the services provided by Noon. The solution we offered included a live streaming service that "+
                    "will give the internet user the opportunity to watch the covering or holding now events anytime.",
            Macbook : 'https://images.techhive.com/images/article/2016/04/macbookpro13-100657828-large.jpg',
            iphone : 'http://pluspng.com/img-png/iphone-png-black-and-white-black-iphone-6-cases-png-image-34203-350.png'
        };
    }

    render() {
        return(
            <div id="overview">
        <div className="white-text" id="overview-text">
            <h2>Overall preview</h2>
            <br/>
            <p>
                {this.state.text}
            </p>
        </div>
        <img src={this.state.Macbook} alt="Mac" id="overview-mac" width="55.5%"/>
        <img src={this.state.iphone} alt="Iphone" id="overview-phone" width="12%"/>
    </div>
        );
    }

}

export default Overview;