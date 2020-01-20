import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Click from './components/Click';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';


class App extends Component {
  render(){
    return (
    <div className="App">
    <ParentComponent />
    {/* <Message></Message> */}
    {/* <Counter></Counter> */}
    {/* <Greet name="vipul" id = "12345"> 
      <p>This is children props</p>
    </Greet>
    <Greet name="Tony Starck" id = "14567">
    </Greet> */}
    
    {/* <EventBind /> */}
    </div>
    );
  }
}

export default App;
