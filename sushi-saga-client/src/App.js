import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state={
      sushiList : [],
      cost: 0, 
      eaten: []  
    }
  }

 

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushiArray => {
      this.setState({
        sushiList : sushiArray.splice(0, 4)
      })
    })
  }

  show4More = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushiArray => {
      const fourthSushi = this.state.sushiList[3]
      const n = sushiArray.findIndex(sushi => sushi.id === fourthSushi.id)
      const newArray = sushiArray.slice(n)
      this.setState({
        sushiList : newArray.splice(0, 4)
      })
    })
  }

  removeSushi=(e, selectedSushi)=>{
    const price = selectedSushi.price
    const toBeDeleted = this.state.sushiList.find(sushi => sushi.id === selectedSushi.id)
    this.setState({
      eaten: this.state.eaten.concat(selectedSushi),
      cost: this.state.cost + price,
      sushiList: this.state.sushiList
      
    })
    // debugger
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiList={this.state.sushiList} show4More={this.show4More} removeSushi={this.removeSushi}/>
        <Table sushiList={this.state.sushiList} cost={this.state.cost}/>
      </div>
    );
  }
}

export default App;