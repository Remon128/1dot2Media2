import React from 'react';
import './portfolioStyle.css'
//import sNoon from '../images/one.png'

import style from './portfolioStyle.css'
import classNames from 'classnames'

const noon = (Props) => {
    let SS = Props.imgsrc;

    const source = ".." + Props.imgsrc;
    return (

        <div className='port bgnoon'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='data'>
                            <div className='dots'>
                                <span className='d1'></span>
                                <span className='d2'></span>
                                <span className='d3'></span>
                            </div>
                            <h2>{Props.title}</h2>
                            <p>{Props.Desc}</p>
                            <button className='btn btn-danger'>Case Study</button>
                        </div>
                    </div>
                    <div className='col-md-6'>

                        <img src={Props.image} />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default noon;