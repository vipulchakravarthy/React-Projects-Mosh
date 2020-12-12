import React, { Component } from 'react';
import './App.css';
import MoviesComponent from './components/movies';


class App extends Component {
  render(){
    return (
    <main className="container">
     <MoviesComponent /></main>
    );
  }
}

export default App;
