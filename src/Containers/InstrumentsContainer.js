import React from 'react';
import InstrumentCard from '../Components/InstrumentCard'
import SelectedInstrumentCard from '../Components/selectedInstrumentCard'
import { Grid, Image, Card, Modal } from 'semantic-ui-react'



class InstrumentsContainer extends React.Component {

handleClick = () =>{
  return console.log('rendered modal window')
}

render(){
  return(
    <div>
      {this.props.selectedInstrument ? <SelectedInstrumentCard instrument={this.props.selectedInstrument}/> : null}
      <Grid columns={3} centered>
        {this.props.allInstruments.map(instrument =>
        <InstrumentCard key={`${instrument.category_id}-${instrument.id}`} showDetail={this.props.showDetail} instrument={instrument} />
        )}
      </Grid>
    </div>
  )
};


}



export default InstrumentsContainer;
