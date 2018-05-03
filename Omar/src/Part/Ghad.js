import React from 'react';
import './portfolioStyle.css'



const ghad = () => {

    return(

    <div className={' port'}  >
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='data'>
                        <div className='dots'>
                            <span className='d1'></span>
                            <span className='d2'></span>
                            <span className='d3'></span>
                        </div>
                        <h2> Alghad Almoshreq  </h2>
                        <p> Al Ghad Al Moshreq is one of the most viewed and creditable TV channel in Yemen, which gave our experts the chance to innovate a mobile optimized website. We developed the website based on users focused solution, such as the updated and informative blogs,multimedia preview, live broadcast service and social media links that keeps their users strongly attached to the website </p>
                        <button className='btn btn-danger'>Case Study</button>
                    </div>
                </div>
                <div className='col-md-6'>
                
                    <img classNames=".port img" src={ require('../images/four.png')}/>
                </div>
            </div>
        </div>
    </div>
    )
};
export default ghad;