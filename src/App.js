import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import InstrumentsContainer from './Containers/InstrumentsContainer'

let URL = `http://localhost:3001/api/v1/instruments`;


class App extends Component {

  constructor(){
    super()
    this.state={
      allInstruments: [],
      selectedInstrument: null
    }
  }

fetchInstruments = () => {
  fetch(URL)
    .then(res => res.json())
      .then(json =>
        this.setState({
          allInstruments: json
        })
        )
}

componentDidMount(){
  this.fetchInstruments();
}
showDetail = (instrument) => {
this.setState({
  selectedInstrument: instrument
})
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header><br/>
        <InstrumentsContainer showDetail={this.showDetail} selectedInstrument={this.state.selectedInstrument} allInstruments={this.state.allInstruments}/>
      </div>
    );
  }
}

export default App;
