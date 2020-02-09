import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from "react-router-dom";
import List from "../list/list";
import To from "../to/to";
import Do from "../do/do";
import Da from "../da/da";
export class App extends Component {
  render() {
    return (
      <Router>
        <div>
              <Route path="/" exact component={List}/>

              <Route path="/" exact component={Do}/>

              <Route path="/to" component={ To }/>
             
              <Route path="/da" component={ Da }/>
        </div>
      </Router>   
    );
  }
}

export default App;

