import React from 'react';
import { Grid, Image, Card, Header, Modal, Button, Icon } from 'semantic-ui-react'
import InstrumentCard from './InstrumentCard'

class SelectedInstrumentCard extends React.Component {

  state = {}

  handleClick = () => this.setState({ active: !this.state.active })

render(){
   const { active } = this.state
      return(
        <Modal open={this.props.isModalOpen} onClose={()=> this.props.closeModal()} closeIcon={true} image={"true"} children>
         <Modal.Content image centered={"true"} >
            <Grid>
              <Grid.Column width={5}>
                <Card>
                <Card.Header as='h3'>{this.props.instrument.brand} {this.props.instrument.name}</Card.Header>
                {this.props.instrument.category_id === 2 ?
                  <Image src={this.props.instrument.pic_url} size='medium' rounded={true} centered verticalAlign='middle' />
                  :<Image src={this.props.instrument.pic_url} size='small' rounded={true} centered verticalAlign='middle' />}
                </Card>
                </Grid.Column>
                <Grid.Column width={6}>
                <Card>
                  <Card.Content>
                  <Header as='h5' >
                  Color: {this.props.instrument.color} <br/>
                  Condition: {this.props.instrument.condition}<br/>
                  Description:
                    <p>
                      <em>{this.props.instrument.description}<br/></em>
                    </p>
                  </Header>
                  <Header as='h4' color='red' >
                  Price: ${this.props.instrument.price}<br/>
                  </Header>
                  </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column width={4}>
                  <div>
                    <Button.Group >
                      <Button primary onClick={()=> this.props.closeModal()}>BUY NOW</Button>
                      <Button secondary toggle active={active} onClick={this.handleClick}>
                         <Icon name='heart' />
                        Favorite
                      </Button>
                    </Button.Group>
                  </div>
                </Grid.Column>
              </Grid>





            </Modal.Content>
          </Modal>
      )
    }

}

export default SelectedInstrumentCard
