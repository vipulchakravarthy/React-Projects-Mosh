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
import NameList from './components/NameList';
import Stylesheet from "./components/Stylesheet";
import InLine from './components/InLine';
import './appStyles.css';
import styles from './appStyles.module.css';

import Form from './components/Form';

class App extends Component {
  render(){
    return (
    <div className="App">
      <Form />
    </div>
    );
  }
}

export default App;
