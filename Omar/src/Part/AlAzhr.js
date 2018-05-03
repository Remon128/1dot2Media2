import React from 'react';
import './portfolioStyle.css'
import classNames from 'classnames'
//import './bootstrap.min.css';

const azhr = (Props) => {

    return(

    <div className={'port m bg'}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='data'>
                        <div className='dots'>
                            <span className='d1'></span>
                            <span className='d2'></span>
                            <span className='d3'></span>
                        </div>
                        <h2>Al azhar</h2>
                        <p>Alazhar is the most important source for clearing the Islamic culture and reviving the Islamic legacy. It offeres more than on service for the society. We were delighted to share our professional work with such a great entity to create the website in a simple and powerful way which makes the user enjoy the ulimate use of all the services provided by Alazhar.
           </p>
                        <button className='btn btn-danger'>Case Study</button>
                    </div>
                </div>
                <div className='col-md-6'>
                
                    <img src={ require('../images/three.png')}/>
                </div>
            </div>
        </div>
    </div>
    )
};
export default azhr;