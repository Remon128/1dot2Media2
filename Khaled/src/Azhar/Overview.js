import React, { Component } from 'react';
import './../reset.css';
import './work.css';


class Overview extends Component {
    constructor(props){
        super(props);
        this.state={ 
            text : "Alazhar is the most important source for clearing the Islamic culture and reviving the Islamic legacy. It offeres more than "+
                    "on service for the society. We were delighted to share our professional work with such a great entity to create "+
                    "the website in a simple and powerful way which makes the user enjoy the ulimate use of all the services provided "+
                    "by Alazhar.",
            Macbook : 'https://images.techhive.com/images/article/2016/04/macbookpro13-100657828-large.jpg',
            iphone : 'http://pluspng.com/img-png/iphone-png-black-and-white-black-iphone-6-cases-png-image-34203-350.png'
        };
    }

    render() {
        return(
            <div className="overview">
                <div id="overview-text">
                    {this.state.text}
                </div>
                <div id="overview-images">
                    <center>
                        <img src={this.state.Macbook} width="80%" height="80%" alt="Macbook" />
                    </center>
                    <img src={this.state.iphone} id="overview-image2" width="20%" height="60%" alt="Iphone" />
                </div>
            </div>
        );
    }

}

export default Overview;