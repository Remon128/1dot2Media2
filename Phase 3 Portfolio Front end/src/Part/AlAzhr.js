import React from 'react';
import './portfolioStyle.css'
import classNames from 'classnames'
//import './bootstrap.min.css';

const azhr = (Props) => {

    return (

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
export default azhr;