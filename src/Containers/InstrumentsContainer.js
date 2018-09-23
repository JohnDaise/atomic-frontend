import React from 'react';
import InstrumentCard from '../Components/InstrumentCard'
import { Grid, Image } from 'semantic-ui-react'



class InstrumentsContainer extends React.Component {


render(){
  return(

    this.props.allInstruments.map(instrument =>
      <Grid columns={4}>
        <InstrumentCard instrument={instrument} />
        </Grid>
      )


  )
};


}




export default InstrumentsContainer;
