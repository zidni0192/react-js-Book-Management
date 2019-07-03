import React, { Component } from 'react'
import './App.css'
import Nav from './screen/Navbar'
import Search from './screen/search'
import List from './screen/list'
import Data from './data'
import BookDetail from './screen/BookDetail'
import {Route , BrowserRouter as Router} from 'react-router-dom'
import Modal from './screen/Modal'

class App extends Component {
  constructor() {
    super()
    this.state = Data
  }  
  render() {
    return (
      <div id="app">
        <Router>
          <Route exact path={"/book"} component={Nav}/>
          <Route exact path={"/book"} component={Search}/>
          <Route exact path={"/book"} render={()=><List data={this.state}/>} />
          <Route path={"/book/:bookid"} component={BookDetail}/>
          <Route path={"/modal"} component={Modal}/>
        </Router>
        
      </div>
      
    )
  }
}
export default App;
