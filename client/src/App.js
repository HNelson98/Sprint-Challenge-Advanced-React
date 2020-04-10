import React from 'react';
import './App.css';
import axios from 'axios'

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
      console.log(this.state)
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">


        </header>
      </div>
    );
  }


}

export default App;
