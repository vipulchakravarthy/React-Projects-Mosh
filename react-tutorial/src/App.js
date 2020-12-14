import React, { Component } from 'react';
import './App.css';
import Counters from './components/Counters';
import MoviesComponent from './components/movies';
import Navbar from './components/Navbar';
class App extends Component {
  state = { 
    counters: [
        {id:1, value: 1},
        {id:2, value: 2},
        {id:3, value: 3},
        {id:4, value: 4},
    ]
}



handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({
        counters
    })
}

handleDecrement = (counter) => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value--;
  this.setState({
      counters
  })
}


handleDelete = (counterId) => {
    // console.log("event called", counterId)
    const arr = this.state.counters.filter((item) => item.id !== counterId);
    this.setState({
        counters:arr
    })
}

handleReset = () => {
    const arr = this.state.counters.map((c) => {c.value = 0; return c});
    this.setState({
        counters: arr
    })
}
  render(){
    return (
      <>
      <MoviesComponent />
    {/* <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
    <main className="container"> 
    <Counters 
    counters={this.state.counters}
    onReset={this.handleReset}
    onDecrement={this.handleDecrement} 
    onIncrement = {this.handleIncrement} onDelete= {this.handleDelete}/></main> */}
    </>
    );
  }
}

export default App;
