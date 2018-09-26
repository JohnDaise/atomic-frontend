import React from 'react';
import { Button, Modal } from 'semantic-ui-react'




class FavoriteList extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }






render(){

    return(
      <Modal trigger={<Button>Show Modal</Button>} >
        <Modal.Content>
          "Hello!"
        </Modal.Content>
      </Modal>
      )
    }
}


export default FavoriteList;
