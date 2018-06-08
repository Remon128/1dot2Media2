import React from 'react';
import './portfolioStyle.css'

const part2 = (Props) => {

    return (


        <div className='port m'>
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
                            <button className='btn btn-danger'>Website</button>
                            <button className='btn btn-defualt sec'>Mobile App</button>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src={Props.image} />
                        <img className='mobile' src={require('../images/mobile.png')} />
                        <img className='watch' src={require('../images/watch.png')} />
                    </div>
                </div>
            </div>
        </div>

    )
};
export default part2;