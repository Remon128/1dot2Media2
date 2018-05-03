
import React, { Component } from 'react';

class DotVidFirst extends Component {
    render() {
      const divStyle = {
        marginTop: 260,
        marginLeft: 930
        
      };
      return (
        <div className="Rectangle_BackGround_Grey1">
            
            <p class="dotvid_title_Grey1">dotvid</p>
            <p class="Ellipse_grey1_Grey1"></p>
            <p class="Ellipse_grey2_Grey1"></p>
            <p class="Ellipse_red_Grey1"></p>
            <div class="Main_Content_Grey1">XXXXXXXXXX XXXXXXXXX XXXXXXXXXXX XXXXXXXXXXx XXXXXXXX</div>
            <p class="Rectangle_lower_red_Grey1"></p>
            <p class="Rectangle_lower_black_Grey1"></p>
            <div >
            <img style={divStyle} src="Front-html-css Phase\psd\dotVid\dotVid_section\dotVid.png" width="850px" height="514px">
            </img>
            </div>

        </div>
      );
    }
}


export default DotVidFirst;