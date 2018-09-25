import React from 'react';
import { Button, Form, Modal, Grid } from 'semantic-ui-react'




class UpdateForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      brand: this.props.instrument.brand,
      name: this.props.instrument.name,
      color: this.props.instrument.color,
      condition: this.props.instrument.condition,
      description: this.props.instrument.description,
      pic_url: this.props.instrument.pic_url,
      price: this.props.instrument.price
    }
  }




handleChange = (e) => {
    console.log([e.target.name], e.target.value),
    this.setState({
      [e.target.name]: e.target.value
    })
  }


render(){
//  this.props.closeUpdateModal
    return(
      <Modal

        open={this.props.isUpdateModalOpen}
        onOpen={()=> this.props.openUpdateModal()}
        onClose={()=> this.props.closeUpdateModal()}
         trigger={
          <Button >
            Update
          </Button>}  >
        <Modal.Content>
        <Form onSubmit={(e)=>
            {
            e.preventDefault();
            this.props.updateInstrument(e)}
          }>
          <Grid>
            <Grid.Column width={6}>
                <label>
                  Brand:
                  <input name="brand" type="text" value={this.state.brand} onChange={(e)=> this.handleChange(e)}/>
                </label>
                <label>
                  Name:
                  <input name="name" type="text" value={this.state.name} onChange={(e)=> this.handleChange(e)}/>
                </label>
                <label>
                  Color:
                  <input name="color" type="text" value={this.state.color} onChange={(e)=> this.handleChange(e)}/>
                </label>
                <label>
                  Conditon:
                  <input name="condition" type="text" value={this.state.condition} onChange={(e)=> this.handleChange(e)}/>
                </label>
            </Grid.Column>
            <Grid.Column width={6}>
                <label>
                  Description:
                <input name="description" type="text" value={this.state.description} onChange={(e)=> this.handleChange(e)}/>
                </label>
                <label>
                  Picture:
                <input name="pic_url" type="text" value={this.state.pic_url} onChange={(e)=> this.handleChange(e)}/>
                </label>
                <label>
                  Price:
                <input name="price" type="integer" value={this.state.price} onChange={(e)=> this.handleChange(e)}/>
                </label>
                <button name="update" type="submit" value="Submit" id={`${this.props.instrument.category_id}-${this.props.instrument.id}`} >Update</button>

          </Grid.Column>
          </Grid>
        </Form>
        </Modal.Content>
      </Modal>
      )
    }
}


export default UpdateForm;
