import React from 'react';
import InstrumentCard from '../Components/InstrumentCard'
import SelectedInstrumentCard from '../Components/selectedInstrumentCard'
import UpdateForm from '../Components/UpdateForm'
import { Grid } from 'semantic-ui-react'



class InstrumentsContainer extends React.Component {



render(){
  return(
    <React.Fragment>
      {this.props.isModalOpen ? <SelectedInstrumentCard
        instrument={this.props.selectedInstrument}
        updateInstrument={this.props.updateInstrument}
        deleteInstrument={this.props.deleteInstrument}
        addToFavorite={this.props.addToFavorite}
        removeFromFavorite ={this.props.removeFromFavorite}
        favoriteList={this.props.favoriteList}
        shoppingCart={this.props.shoppingCart}
        isModalOpen={this.props.isModalOpen}
        closeModal={this.props.closeModal}
        isUpdateModalOpen={this.props.isUpdateModalOpen}
        openUpdateModal={this.props.openUpdateModal}
        closeUpdateModal={this.props.closeUpdateModal}
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
    </React.Fragment>
  )
};


}



export default InstrumentsContainer;
