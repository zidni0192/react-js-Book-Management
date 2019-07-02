import React, { Component } from 'react'
import './App.css'
import Nav from '../src/screen/Navbar'
import Search from '../src/screen/search'
import List from '../src/screen/list'
import Data from '../src/data'
class App extends Component {
  constructor() {
    super()
    this.state = Data
  }
  render() {
    return (
      <div id="app">
        <Nav />
        <Search />
        <List data={this.state}/>
      </div>
    )
  }
}
export default App;
