import React, { Component } from 'react';
import './portfolioStyle.css'
import style from './portfolioStyle.css';


class Logos extends Component {
  render() {
    
    return (
        //classNames({ 'port':true , 'bg':true , 'm':true} )
       // className={classNames({[styles.foo]: true, [styles.bar]: true})}
    //    <div className={'port' + 'm' + 'bg'}>
    <div className= 'port  m bg '>
          
        <div className='container'>
         <h1>Clients </h1>  
            <div className='row'>
            
            <div className='data'>
                <div className='dots'>
                    <span className='d1'></span>
                    <span className='d2'></span>
                    <span className='d3'></span>
                </div>
                
            </div>
                <div className={'col-md-2'}>
                    <img className='client' src={require("../images/c1.png")}/>
                </div>
                <div className='col-md-2'>
                    <img className='client' src={require("../images/c2.png")}/>
                </div>
                <div className='col-md-4'>
                    <img className='client' src={require("../images/c3.png")}/>
                </div>
                <div className='col-md-2'>
                    <img className='client' src={require("../images/c4.png")}/>
                </div>
                <div className='col-md-2'>
                    <img className={[style.client, style.s].join(' ')} src={require("../images/c5.png")}/>
                </div>
                <div className='col-md-2'>
                <img className={[style.client, style.s].join(' ')} src={require("../images/c5.png")}/>                </div>
                <div className='col-md-2'>
                    <img className='client' src={require("../images/c4.png")}/>
                </div>
                <div className='col-md-4'>
                    <img className='client' src={require("../images/c3.png")}/>
                </div>
                <div className='col-md-2'>
                    <img className='client' src={require("../images/c2.png")}/>
                </div>
                <div className='col-md-2'>
                    <img className='client' src={require("../images/c1.png")}/>
                </div>
            </div>
        </div>
    </div>
          
    );
    
    
  }
}

export default Logos;
