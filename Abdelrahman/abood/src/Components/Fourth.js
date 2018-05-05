import React, { Component } from 'react';

class Fourth extends Component {
  render() {
    return (
          <div className="content">
          <div className="left">
              <div className="rectangle">
                  <img src="./images/3.png" alt="image"/>
              </div>
          </div>
          <div className="right">
              <img src="./images/logo.png" alt="logo"/>
              <h2 className="active">dotacademy</h2>
              <h2>Training academy</h2>
              <p> Our continuous development is our ladder to excellence and achieving the maximum productivity A training academy that provide courses that enhances the experience across most of the media fields from concepts to practical operation, which
                  is gainful for the media workers, governmental sectors and individuals whom are interested in the media field.
              </p>
              <button type="button" className="btn">Visit the website</button>
          </div>
      </div>
      
    );
  }
}

export default Fourth;