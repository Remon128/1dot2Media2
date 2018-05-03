import React from 'react';
import './portfolioStyle.css'
import sNoon from '../images/one.png'

const noon = () => {


    return(    

    <div className='port bg'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='data'>
                        <div className='dots'>
                            <span className='d1'></span>
                            <span className='d2'></span>
                            <span className='d3'></span>
                        </div>
                        <h2>NOON</h2>
                        <p>Noon magazine is a printable magazine that introduce the latest women sports news, opinions, articles and previews inspirational stories that deserve to be told.
        Producing an online magazine allowed Noon to reach a global market and offer the latest information daily online which attracted lots of users and kept them updated with the latest sports news.
        Our talented designers has created the web application that suits the millennials and all the users to check and get the best of all the services provided by Noon.
        The solution we offered included a live streaming service that will give the internet user the opportunity to watch the covering or holding now events anytime.
         </p>
                        <button className='btn btn-danger'>Case Study</button>
                    </div>
                </div>
                <div className='col-md-6'>
                
                    <img src={sNoon}/>
                </div>
            </div>
        </div>
    </div>
    )
};
export default noon;