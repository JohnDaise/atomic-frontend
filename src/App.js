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
      isUpdateModalOpen: false,
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

updateInstrument = (e) => {
  //fetch to update instrument, need id in order to that, also need a form
  let id = e.target[7].id
  fetch(URL + `/${id}`, {
    method: "PATCH",
    headers: {
      //Authorization code
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
        'brand': e.target[0].value,
        'name': e.target[1].value,
        'color': e.target[2].value,
        'condition': e.target[3].value,
        'description': e.target[4].value,
        'pic_url': e.target[5].value,
        'price': e.target[6].value
    })
  }).then(res=> res.json())
  .then(json => {console.log(json)
  });
  this.closeUpdateModal();

}

//action functions

closeModal = () => {
  this.setState({
    isModalOpen: false
  })
}

openUpdateModal = () => {
  this.setState({
    isUpdateModalOpen: true,
  })

}

closeUpdateModal = () => {
  this.setState({
    isUpdateModalOpen: false
  })
}

handleChange = (input) =>{
  this.setState({
    searchTerm: input
  })
}

//filter


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
    console.log(this.state.isUpdateModalOpen)
    console.log(this.state.isModalOpen)
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
          isUpdateModalOpen={this.state.isUpdateModalOpen}
          openUpdateModal={this.openUpdateModal}
          closeUpdateModal={this.closeUpdateModal}
          />
      </div>
    );
  }
}

export default App;
