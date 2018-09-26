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
      selectedInstrument: null,
      favoriteList: [],
      shoppingCart: [],
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
  let id = parseInt(e.target[7].id.split("-")[1])
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
  .then(json =>
    this.setState({
      selectedInstrument: json
    })
  );
  console.log(this.showDetail(id))
  this.closeUpdateModal();
  this.fetchInstruments();
}

deleteInstrument = (e) => {
  let id = parseInt(e.target.id.split("-")[1])
  fetch(URL + `/${id}`, {
    method: "DELETE"
  }).then(res=> res.json())
  .then(json => {
      this.fetchInstruments()
    });
  this.closeModal();
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
return (
  this.state.allInstruments.filter( instrument => (
    instrument.name.toLowerCase().includes(this.state.searchTerm) ||
    instrument.brand.toLowerCase().includes(this.state.searchTerm) ||
    instrument.color.toLowerCase().includes(this.state.searchTerm) ||
    instrument.condition.toLowerCase().includes(this.state.searchTerm) ||
    instrument.category.name.toLowerCase().includes(this.state.searchTerm)
    ))
    )
  }


//     search === instrument.brand.toLowerCase() ||
//     search === instrument.name.toLowerCase() ||
//     search === instrument.color.toLowerCase() ||
//     search === instrument.condition.toLowerCase() ||
//     search === instrument.category.name.toLowerCase()
//   )

///Favorites

addToFavorite = (instrument) =>{
  this.setState({
    favoriteList: [...this.state.favoriteList, instrument]
  })
}

removeFromFavorite = (selectedInstrument) =>{
  let newFavs;
  newFavs = this.state.favoriteList.filter(instrument => instrument !== selectedInstrument )
  this.setState({
    favoriteList: newFavs
  })
}





  render() {
    return (
      console.log(this.state.allInstruments),
      <div className="App">
        <header className="App-header">
        <Navbar className="navbar"
          favoriteList={this.state.favoriteList}
         />
        </header><br/>
       <Filter
         searchTerm={this.state.searchTerm}
         handleChange={this.handleChange}
         filterList={this.filterList}
         />
        <InstrumentsContainer
          showDetail={this.showDetail}
          updateInstrument={this.updateInstrument}
          deleteInstrument={this.deleteInstrument}
          addToFavorite={this.addToFavorite}
          removeFromFavorite ={this.removeFromFavorite}
          favoriteList={this.state.favoriteList}
          shoppingCart={this.state.shoppingCart}
          selectedInstrument={this.state.selectedInstrument}
          allInstruments={this.filterList()}
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
