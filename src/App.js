import React, { Component } from 'react'
import './App.css'
import Nav from './screen/Navbar'
import Search from './screen/search'
import List from './screen/list'
import Data from './data'
import BookDetail from './screen/BookDetail'
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Modal from './screen/Modal'
import ModalDelete from './screen/ModalDelete'

class App extends Component {
  constructor() {
    super()
    this.state = { Data, show: false, modalDelete: false }
  }
  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }
  showModalDelete = () => {
    this.setState({ modalDelete: true })
  }

  hideModalDelete = () => {
    this.setState({ modalDelete: false })
  }
  addData = (dataAdded) => {
    this.state.Data.push(dataAdded)
    console.log(this.state.Data)
  }
  deleteData = (deleteData) => {
    this.state.Data.splice(deleteData, 1)
    console.log(this.state.Data)
  }
  editData = (index, editData) => {
    this.setState(Data[index] = editData)
  }

  render() {
    return (
      <div id="app">
        <Router>
          <Redirect exact from="/" to="/book" />
          <Route exact path={"/book"} component={Nav} />
          <Route exact path={"/book"} component={Search} />
          <Route exact path={"/book"} render={() => <List prop={this.state} showModal={this.showModal} />} />
          <Route exact path={"/book/:bookid"} render={(props) => <BookDetail data={this.state} showModal={this.showModal} showModalDelete={this.showModalDelete} {...props} />} />
          <Route exact path={"/book/:bookid"} render={(props) => <ModalDelete data={this.state} deleteData={this.deleteData} modalDelete={this.state.modalDelete} hideModalDelete={this.hideModalDelete} {...props} />} />
          <Route exact path={"/book"} render={() => <Modal show={this.state.show} dataState={this.state} handleClose={this.hideModal} dataAdded={this.addData} />} />
          <Route exact path={"/book/:bookid"} render={(props) => <Modal dataState={this.state} show={this.state.show} handleClose={this.hideModal} dataEdited={this.editData} {...props} />} />
        </Router>
      </div>
    )
  }
}
export default App
