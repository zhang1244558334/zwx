import React, { Component } from 'react';
import "../css.css"
export class To extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }
    
     fh(){
         this.props.history.push("/")
     }


    render() {
        return (
            <div className="to">
                  <div className="to1">
                     <p onClick={this.fh.bind(this)}>✔</p>  
                     <input type="text" placeholder="请搜索你想搜索的东东"/>        
                       <span>搜索</span>            
                  </div>
                 
            </div>
        );
    }
}
export default To;
