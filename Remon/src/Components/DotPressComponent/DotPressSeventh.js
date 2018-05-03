
import React, { Component } from 'react';


class DotPressSeventh extends Component {
    render() {
        const divStyle1 = {
            marginLeft:260,
            marginTop:120
        }
        const divStyle2 = {
            marginLeft:230,
            marginTop:120
        }
      return (
        <div class="Rectangle_BackGround_Grey4">
        <div class="parent_section7">
            <div class="Eclipse_parent">
               <p class="Ellipse_black1"></p>
               <p class="Ellipse_black2"></p>
               <p class="Ellipse_dim_black"></p>
            </div>
            <div class="dotpress_title">
                    Email Server
            </div>  

            <div class="Rectangle_Integrated"> 
                <img src="Front-html-css Phase\psd\dotPress\Email server\Google integrated.png" 
                 style={divStyle1}
                 width="180" height="124">
                 </img>
            </div>
            <div class="Google_Integrated_Text">Google Integrated</div>
            <div class="Rectangle_Developed">
                    <img src="Front-html-css Phase\psd\dotPress\Email server\Custome developed.png" 
                    style={divStyle2}
                    width="184" height="121">
                    </img>
            </div>
            <div class="Custom_Developed_Text">Custom Developed</div>
        </div>
    </div>
      );
    }
}


export default DotPressSeventh;