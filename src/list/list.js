import React, { Component } from 'react';
import "../css.css"
import { Carousel } from 'antd-mobile';//移动端的走马灯
import axios from "axios"
export class List extends Component {
    constructor(props) {
        super(props)
        this.state={
            aar:[
                 "/jirou.jpg",
                 "/d2.jpg",
                 "/d3.jpg",
                 "/d4.jpg"
            ],
            a1:[],
            a2:[]
        }
    }


    componentDidMount(){
        axios.get('/skt.json').then((msg)=>{
               console.log(msg)
               this.setState({a1:msg.data.jj})
               this.setState({a2:msg.data.jjj})
        })
   
    }

   
 ss(){
     this.props.history.push("/to")
 }

    render() {
        return (
            <div className="list">
                  <div className="d1">
                         <img src="/q_03.jpg" alt=""/>
                         <input type="text" placeholder="输入城市等东东" onClick={this.ss.bind(this)}/>
                         <p>北京</p>
                  </div>

        <Carousel  
          autoplay={true}
        
        >
          {
             this.state.aar.map((v)=>{
                   return  <img src={v} alt="" className="img1"/>
                         

             })
        }
        </Carousel>

        {/**选项卡类别 */}
        <Carousel  
             
            >
            
            <div className="d3">
            <ul>
              {
                 this.state.a1.map((v)=>{
                         return <li>
                                <img src={v.i} alt=""/>
                                <a href="">{v.ii}</a>
                         </li>
                 })
              }
            </ul>
            

            </div>
            <div className="d3">
            <ul>
              {
                 this.state.a1.map((v)=>{
                         return <li>
                                <img src={v.i} alt=""/>
                                <a href="">{v.ii}</a>
                         </li>
                 })
              }
            </ul>
            

            </div>
      </Carousel>

           {/** 介绍 */}
              <div className="d4">
                    <p>定位失败</p>
                    <p>必游榜单</p>
              </div>
             <div className="d5"></div>
              
           <div className="d6">
                <h1>本周热门榜单</h1>
                 <p>全部榜单</p>
           </div>
   

           {/** 旅游胜点*/}

              <div className="d7">
                   <ul>
                       {
                           this.state.a2.map((v)=>{
                                 return <li>
                                      <img src={v.img} alt=""/>
                                      <p>{v.id}</p>
                                 </li>
                           })
                       }
                   </ul>
              </div> 

            </div>
        );
    }
}

export default List;
