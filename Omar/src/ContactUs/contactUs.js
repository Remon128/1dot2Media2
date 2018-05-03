import React from 'react' ;
import './contactStyle.css';
import { SocialIcon } from 'react-social-icons';


const contactUs = () => {

    return(
       
        <div className='contact'>
            <div className='container'>
                <div className='dots'>
                    <span className='d1'></span>
                    <span className='d2'></span>
                    <span className='d3'></span>
                </div>
                <h2>Contact us</h2>
                <div className='get-in'>
                    <div className='touch'>
                        <h2>Get In Touch</h2>
                        <p>Abu Dhabi, UAE, 2454</p>
                        <p>+971 569888100</p>
                        <p>info@1dot2.ae</p>
                        <p>www.1dot2.ae</p>
                    </div>
                    <div className='address'>
                        <h2>Address</h2>
                        <p>Abu Dhabi, UAE, 2454     Abu Dhabi,</p> <p> UAE, 2454      Abu Dhabi, UAE,</p>
                        <p>2454Abu Dhabi,     UAE, 2454Abu </p>
                        <ul>
                            <li> <SocialIcon url="http://facebook.com/Ramzy" /> </li>
                            <li>  <SocialIcon url="http://twitter.com/Ramzy" /> </li>
                            <li><SocialIcon url="http://instagram.com/Ramzy" /></li>
                            <li><SocialIcon url="http://google.com/Ramzy" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>    
    )
};
export default contactUs;