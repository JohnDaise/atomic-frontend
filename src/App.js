import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Filter from './Containers/Filter'
import InstrumentsContainer from './Containers/InstrumentsContainer'

let URL = `http://localhost:3001/api/v1/instruments`;


class App extends Component {

  constructor(){
    super()
    this.state={
      allInstruments: [],
      newList: [],
      selectedInstrument: null,
      isModalOpen: false,
      searchTerm: ""
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

//CRUD

showDetail = (instrument) => {
this.setState({
  selectedInstrument: instrument,
  isModalOpen: true
  })
}

updateInstrument = () => {
  //fetch to update instrument, need id in order to that, also need a form
  console.log('updated!')
  fetch(URL, {
    method: "PATCH",
    headers: {
      //Authorization code
    },
    body: JSON.stringify({
      //rest of patch fetch
    })

  }


  )
}



//action functions

closeModal = () =>{
  this.setState({
    isModalOpen: false
  })
}

handleChange = (input) =>{
  this.setState({
    searchTerm: input
  })
}


filterList = () => {
      let search = this.state.searchTerm.toLowerCase()
  const newList = this.state.allInstruments.slice().filter( instrument =>
    search === instrument.brand.toLowerCase() ||
    search === instrument.name.toLowerCase() ||
    search === instrument.color.toLowerCase() ||
    search === instrument.condition.toLowerCase() ||
    search === instrument.category.name.toLowerCase()
  )
  if (newList.length === 0 && search.length > 0) {
    window.alert("No Matches Found")
  } else {
  this.setState({
    newList: newList
  })
}
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar className="navbar" />
        </header><br/>
       <Filter
         searchTerm={this.state.searchTerm}
         handleChange={this.handleChange}
         filterList={this.filterList}
         />
        <InstrumentsContainer
          showDetail={this.showDetail}
          updateInstrument={this.updateInstrument}
          selectedInstrument={this.state.selectedInstrument}
          allInstruments={this.state.allInstruments}
          newList={this.state.newList}
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          />
      </div>
    );
  }
}

export default App;
