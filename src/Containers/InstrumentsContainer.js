import React from 'react';
import InstrumentCard from '../Components/InstrumentCard'
import SelectedInstrumentCard from '../Components/selectedInstrumentCard'
import { Grid, Image, Card, Modal } from 'semantic-ui-react'



class InstrumentsContainer extends React.Component {



render(){
  return(
    <div>
      {this.props.isModalOpen ? <SelectedInstrumentCard
        instrument={this.props.selectedInstrument}
        isModalOpen={this.props.isModalOpen}
        closeModal={this.props.closeModal}
        /> : null}
      <Grid centered columns={3} >
        { this.props.newList.length === 0 ? this.props.allInstruments.map(instrument =>
          <InstrumentCard
            key={`${instrument.category_id}-${instrument.id}`}
            showDetail={this.props.showDetail}
            instrument={instrument}
            isModalOpen={this.props.isModalOpen}
            /> ):
            this.props.newList.map(instrument =>
              <InstrumentCard
                key={`${instrument.category_id}-${instrument.id}`}
                showDetail={this.props.showDetail}
                instrument={instrument}
                isModalOpen={this.props.isModalOpen}
                />
        )}
      </Grid>
    </div>
  )
};


}



export default InstrumentsContainer;
