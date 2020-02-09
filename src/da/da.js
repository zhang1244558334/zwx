import React, { Component } from 'react';

export class da extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

     dj(){
          alert("预约成功！！！！")
     }
     sss(){
         this.props.history.push("/")
     }
    render() {
        return (
            <div className="da"> 
                  <div className="da1" style={{position:"relative"}}>
                       <img src="/g_01.jpg"alt=""/>                     
                  </div>

                  <div className="dal2">
                       
                    <p>5.0分 超赞</p>
                     <p>景点简介</p>

                  </div>
                  <input type="button" value="预定" onClick={this.dj.bind(this)}/>

                  <input type="text" value="返回" style={{position:"absolute",top:12,left:0 ,width:0.5+"rem",height:0.1+"rem",fontSize:0.1+"rem",textAlign:"center"}}  onClick={this.sss.bind(this)}/>
            </div>
        );
    }
}

export default da;
