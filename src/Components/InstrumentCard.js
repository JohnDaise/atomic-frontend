import React from 'react';
import { Grid, Image, Card, Header } from 'semantic-ui-react'

class InstrumentCard extends React.Component {


handleClick = () => {
 this.props.showDetail(this.props.instrument)
}



render(){
  return(
    <Grid.Column>
    <Card onClick={(e) => this.handleClick(e) }>
        {this.props.instrument.category_id === 2 ?
        <Image src={this.props.instrument.pic_url} size='medium' rounded={true} centered verticalAlign='middle' />
        :<Image src={this.props.instrument.pic_url} size='small' rounded={true} centered verticalAlign='middle' />}
      <Card.Content>
        <Card.Header as='h3'>{this.props.instrument.brand} {this.props.instrument.name}</Card.Header>
        <Header as='h4' color='red' >
          Price: ${this.props.instrument.price}<br/>
        </Header>
      </Card.Content>
    </Card>
    </Grid.Column>
  )
  }
}

export default InstrumentCard;

//showDetail for a single instrument
// <Card >
//   <Card.Header as='h3'>{this.props.instrument.brand} {this.props.instrument.name}</Card.Header>
//     {this.props.instrument.category_id === 2 ?
//     <Image src={this.props.instrument.pic_url} size='medium' rounded={true} centered verticalAlign='middle' />
//     :<Image src={this.props.instrument.pic_url} size='small' rounded={true} centered verticalAlign='middle' />}
//   <Card.Content>
//     <Header as='h5' >
//       Color: {this.props.instrument.color} <br/>
//       Condition: {this.props.instrument.condition}<br/>
//     </Header>
//     <Header as='h4' color='red' >
//       Price: ${this.props.instrument.price}<br/>
//     </Header>
//   </Card.Content>
// </Card>





// instrument1 = Instrument.create(brand: 'Fender', name: 'Stratocaster' , color: 'White' , condition: 'Good', pic_url: "https://media.sweetwater.com/api/i/f-webp__q-82__ha-ca2f6a50f2a855ba__hmac-d22526535c108595f9319d7df69a1d7d48b63f3a/images/guitars/StratAO6ROWT/V1850409/V1850409-front-large.jpg", price: 1000, sold: false, category_id: 1, user_id: user1.id )
