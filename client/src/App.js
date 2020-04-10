import React from 'react';
import './App.css';
import axios from 'axios'
import PlayersList from './Components/Players';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Players: []
    };
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/players').then(res => {
      console.log("PLAYERS RESPONSE", res.data)
      this.setState({
        Players: res.data,
      })
      // console.log(this.state)
    })
  }

  render(){
    return (
      <div className="App">
        <PlayersList player= {this.state.Players}/>
      </div>
    );
  }


}

export default App;
