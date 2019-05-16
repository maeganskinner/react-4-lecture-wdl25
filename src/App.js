import React, {Component} from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(){
    super();
    // we don't have any characters at first, so we need an empty array as a placeholder
    this.state = {
      characters: []
    }
  }
  /* Use componentDidMount if you want the data to be requested immediately when the user lands on the page
   componentDidMount(){ 
     // You can make any kind of HTTP request with axios by changing it from
     // axios.post to axios.get or axios.put or axios.delete

     // If you need to send data with your request, send it as an object as the second argument to the axios function

     let promise = axios.post("https://www.breakingbadapi.com/api/characters", {cheeseburger: "welldone"})
  
     promise.then(response => {
       console.log(response.data);
       this.setState({characters: response.data})
     })
   }
   */
  render(){

    let characterList = this.state.characters.map(character => {
      return <div>
      <h1>{character.name}</h1>
      {/* you probably shouldn't do inline styling like this */}
      <img style={{maxWidth: '100px'}} src={character.img} />
      </div>
    })
  
  return (
    <div className="App">
    {/* Or you can request the information when the user clicks a button  */}
<button onClick={() => {
  let promise = axios.get("https://www.breakingbadapi.com/api/characters")
    promise.then(response => {
      console.log(response.data);
      this.setState({characters: response.data})
    })
}}>Get Information</button>
      {characterList}
    </div>
  );
  }
}

export default App;
