import React, { Component } from 'react';
import './portfolioStyle.css'
import classNames from 'classnames';
import style from './portfolioStyle.css';


class Logos extends Component {
    render() {

        return (
            //classNames({ 'port':true , 'bg':true , 'm':true} )
            // className={classNames({[styles.foo]: true, [styles.bar]: true})}
            //    <div className={'port' + 'm' + 'bg'}>
            <div className='port  m bglogos '>

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
                            <img className='client' src={this.props.ImageUrl_OM} />
                        </div>
                        <div className='col-md-2'>
                            <img className='client' src={this.props.ImageUrl_ElGhad} />
                        </div>
                        <div className='col-md-4'>
                            <img className='client' src={this.props.ImageUrl_Emarat} />
                        </div>
                        <div className='col-md-2'>
                            <img className='client' src={this.props.ImageUrl_Khalefa} />
                        </div>
                        <div className='col-md-2'>
                            <img className='azher ' src={this.props.ImageUrl_Azhar} />
                        </div>

                        <div className='col-md-2'>
                            <img className='azher ' src={this.props.ImageUrl_Azhar} />
                        </div>
                        <div className='col-md-2'>
                            <img className='client' src={this.props.ImageUrl_Khalefa} />
                        </div>
                        <div className='col-md-4'>
                            <img className='client' src={this.props.ImageUrl_Emarat} />
                        </div>
                        <div className='col-md-2'>
                            <img className='client' src={this.props.ImageUrl_ElGhad} />
                        </div>
                        <div className='col-md-2'>
                            <img className='client' src={this.props.ImageUrl_OM} />
                        </div>
                    </div>
                </div>
            </div>

        );


    }
}

export default Logos;
