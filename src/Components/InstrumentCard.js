import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

const InstrumentCard = (props) => {
  return(

    <div className="ui card">
      <h1>{props.instrument.brand} {props.instrument.name}</h1>
      <div>
        <img src={props.instrument.pic_url}  size='small' rounded/>
      </div>
      <div>
        Color: {props.instrument.color} <br/>
        Condition: {props.instrument.condition}<br/>
        Price: ${props.instrument.price}<br/>
      </div>
    </div>
  )



}

export default InstrumentCard;

// instrument1 = Instrument.create(brand: 'Fender', name: 'Stratocaster' , color: 'White' , condition: 'Good', pic_url: "https://media.sweetwater.com/api/i/f-webp__q-82__ha-ca2f6a50f2a855ba__hmac-d22526535c108595f9319d7df69a1d7d48b63f3a/images/guitars/StratAO6ROWT/V1850409/V1850409-front-large.jpg", price: 1000, sold: false, category_id: 1, user_id: user1.id )
