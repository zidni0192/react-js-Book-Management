import React, { Component } from 'react'
import './App.css'
import Nav from '../src/screen/Navbar'
import Search from '../src/screen/search'
import List from '../src/screen/list'
import Data from '../src/data'
import {Route , BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = Data
  }
  render() {
    return (
      <div id="app">
        <Router>
          <Route path={"/"} component={Nav}/>
          <Route path={"/"} component={Search}/>
          <Route path={"/"} render={()=><List data={this.state}/>} />
        </Router>
      </div>
    )
  }
}
export default App;
