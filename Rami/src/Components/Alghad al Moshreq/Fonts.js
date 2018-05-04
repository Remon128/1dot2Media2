import React, { Component } from 'react';
import "./../Components props.css";
class Fonts extends Component {
    state = {
        _fonts: [
            {
                fontName: "Blue", codeName: "114497", cName: "Blue",
                LineClass: "Shape_1_copy_2", Shape1Class: "Ellipse_1_copy_4", Shape2Class: "Ellipse_1_copy_4_2", Shape3Class: "Ellipse_1_copy_4_3"
            },
            {
                fontName: "Space Blue", codeName: "0a4979", cName: "Space_Blue",
                LineClass: "Shape_1_copy", Shape1Class: "Ellipse_1_copy_3", Shape2Class: "Ellipse_1_copy_3_2", Shape3Class: "Ellipse_1_copy_3_3"
            },
            {
                fontName: "Gray", codeName: "d9d9d9", cName: "Gray",
                LineClass: "Shape_1_copy_3", Shape1Class: "Ellipse_1_copy_5", Shape2Class: "Ellipse_1_copy_5_2", Shape3Class: "Ellipse_1_copy_5_3"
            },
            {
                fontName: "Light Gray", codeName: "e3e8f0", cName: "Light_Gray",
                LineClass: "Shape_1", Shape1Class: "Ellipse_1", Shape2Class: "Ellipse_1_copy_2", Shape3Class: "Ellipse_1_copy"
            }
        ]


    }
    render() {


        return (
            <div>
                {this.state._fonts.map(element => {
                    return (
                        <div>
                            <p className={element.cName}>{element.fontName}</p>
                            <p className={"_" + element.codeName}>#{element.codeName}</p>
                            <div className= {element.LineClass}/>
                            <div className= {element.Shape1Class}/>
                            <div className= {element.Shape2Class}/>
                            <div className= {element.Shape3Class}/>

                        </div>
                    );
                })}
            </div>
        );
    }


}
export default Fonts;
