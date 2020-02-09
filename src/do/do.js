import React, { Component } from 'react';
import "../css.css"
import axios from "axios"
export class Do extends Component {
    constructor(props) {
        super(props)
        this.state={
            arr:[]
        }
    }
    componentDidMount(){
        axios.get('/skt.json').then((msg)=>{
               console.log(msg)
               this.setState({arr:msg.data.j})
        })
   
    }
 
    bh(){
        this.props.history.push("/da")
    }

    render() {
        return (
            <div className="do">
                    <h3>猜你喜欢</h3>
                <div className="ld">
                     <ul>
                         {
                             this.state.arr.map((v)=>{
                                 return <li onClick={this.bh.bind(this)}>
                                       <img src={v.img} alt=""/>
                                    <div>
                                       <h2>{v.p}</h2>
                                       <h3>{v.t}</h3>
                                       <h4>{v.tt}</h4>
                                       <h5>{v.ttt}</h5>
                                    </div>    
                                 </li>
                             })
                         }
                     </ul>
                </div>
                  
            </div>
        );
    }
}

export default Do;
