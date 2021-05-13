import React, { Component } from 'react'
import {v4 as uuid} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

class App extends Component {
  state={
    items:[],
    item:"",
    id: uuid(),
    editItem:false
  }

  handleChange = e => {
    this.setState({
      item:e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items,newItem]
    this.setState({
      items: updatedItems,
      item:"",
      id:uuid(),
      editItem: false
    })
  }

  clearList = () => {
    this.setState({
      items:[]
    })
  }

  handleDelete = (id) => {
    const sortedArray = this.state.items.filter(item=>item.id!==id);
    this.setState({
      items:sortedArray
    })
  }

  handleEdit = (id) => {
    const sortedArray = this.state.items.filter(item=>item.id!==id);
    const selectedObj = this.state.items.find(item=>item.id === id);
    console.log(selectedObj)
    this.setState({
      items:sortedArray,
      item:selectedObj.title,
      id:id,
      editItem:true
    },()=>console.log(this.state))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center" >todo input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
