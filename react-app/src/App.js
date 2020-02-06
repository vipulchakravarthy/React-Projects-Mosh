// import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/navbar';
import Counters from './Components/counters';

class App extends Component {
  state = { 
    counters : [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ]
 };

 handleReset = () => {
   const counters =  this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters});
 }

 handleIncrement = counter => {
    // console.log(counter)
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
 }

 handleDelete = (counterId) => {
    // console.log("delete clicked  ",counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
 }
  render() { 
    return ( 
      <React.Fragment>
    <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
    <main className="container">
      <Counters 
      counters = {this.state.counters}
      onDelete= {this.handleDelete}
      onIncrement = {this.handleIncrement}
      onReset = {this.handleReset}
      />
    </main> 
    </React.Fragment> 
     );
  }
}
 
export default App;
