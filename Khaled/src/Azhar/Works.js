import React, { Component } from 'react';
import './../reset.css';
import './work.css';

class Works extends Component{
    constructor(props){
        super(props);
        this.state = [{href: "#",image: "images/dotemirates.png"},{href: "#",image: "images/dotemirates.png"}]
    }
    render(){
        return(
            <div>
                <h2>MORE WORK</h2>
                {this.state.map(work =>{
                    return (
                        <a href={work.href}><img src={work.image} alt="Work" style={{marginBottom: "100px", marginRight: "10px"}}/></a>
                    );
                })}
            </div>
        );  
    }
}
export default Works;