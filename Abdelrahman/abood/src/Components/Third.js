import React, { Component } from 'react';

class Third extends Component {
  render() {
 
    return (
      <div className="content">
      <div className="right background"  >
          <img src="./images/logo.png" alt="logo"/>
          <h2 className="active">dotmedia</h2>
          <h2>Video production</h2>
          <p>We don't usually stick to the easy way of doing things. We prefer the Smart way, And that's how we show pride in craftsmanship.
          </p>
          <p>A one-stop-shop rental house, which enables people and businesses to rent film and TV production equipment including cameras, lenses and lighting.</p>
          <button type="button" className="btn">Visit the website</button>
      </div>
      <div className="left" >
          <img className="full" src="./images/Layer 8.png" alt="image"/>
      </div>
  </div>
    );
  }
}

export default Third;