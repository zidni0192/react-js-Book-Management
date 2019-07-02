import React, { Component } from 'react'
import './App.css'
import Nav from '../src/screen/Navbar'
import List from '../src/screen/list'
class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div id="app">
        <Nav />

        <form>
          <input type="text" id="search" placeholder="Search Book ..." />
        </form>
        <List />
      </div>
    )
  }
}
export default App;
