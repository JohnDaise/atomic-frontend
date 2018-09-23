import React from 'react';
import InstrumentCard from '../Components/InstrumentCard'
import { Grid, Image, Card } from 'semantic-ui-react'



class InstrumentsContainer extends React.Component {

showDetail = (instrument) => {
  console.log(instrument)
}



render(){
  return(
    <Grid columns={3} centered>
      {this.props.allInstruments.map(instrument =>
      <InstrumentCard key={`${instrument.category_id}-${instrument.id}`} showDetail={this.showDetail} instrument={instrument} />
      )}
    </Grid>
  )
};


}



export default InstrumentsContainer;
