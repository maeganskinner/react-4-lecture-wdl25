import React, {Component} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super(props);
    this.state = {
      chracters: []
    };

  }
  getChracters(){
    const promise = axios.get("https://www.breakingbadapi.com/api/characters")
    promise.then(response =>{
      console.log(response.data);
      this.setState({chracters: response.data});
    }
  });

  render(){
  return (
    <div className="App">
      <h1>The Breaking Bad Api</h1>
      <button onClick= {this.getChacters}/> Get Chracters </button>
      {
        this.state.chracters.map(chracter => <h2> {chracter.name})</h2>
      }
    
    </div>
  );
  }
}

export default App;
