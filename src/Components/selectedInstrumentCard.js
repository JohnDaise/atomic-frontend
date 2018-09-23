import React from 'react';
import { Grid, Image, Card, Header, Modal, Button } from 'semantic-ui-react'
import InstrumentCard from './InstrumentCard'

class SelectedInstrumentCard extends React.Component {
  constructor(props){
    super(props)
    this.state = { open: false }



  }


  handleOpen = () => {
      this.setState({ open: true })
  }

  handleClose = () => {
      this.setState({ open: false })
  }


render(){

      return(
        <Modal open={this.props.instrument} closeIcon onClose={this.handleClose} image={true} children>
         <Modal.Content image>
          <Card >
            <Card.Header as='h3'>{this.props.instrument.brand} {this.props.instrument.name}</Card.Header>
            {this.props.instrument.category_id === 2 ?
              <Image src={this.props.instrument.pic_url} size='medium' rounded={true} centered verticalAlign='middle' />
              :<Image src={this.props.instrument.pic_url} size='small' rounded={true} centered verticalAlign='middle' />}
              <Card.Content>
              <Header as='h5' >
              Color: {this.props.instrument.color} <br/>
              Condition: {this.props.instrument.condition}<br/>
              </Header>
              <Header as='h4' color='red' >
              Price: ${this.props.instrument.price}<br/>
              </Header>
              </Card.Content>
            </Card>
            </Modal.Content>
          </Modal>
      )
    }

}

export default SelectedInstrumentCard