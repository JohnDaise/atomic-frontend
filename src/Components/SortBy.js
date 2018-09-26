import React from 'react';
import { Dropdown } from 'semantic-ui-react'


class SortBy extends React.Component {
  constructor(props){
    super(props)
    this.state={
      value:{
        text: '',
        value: ''
      }
    }
  }

handleChange = (e, { value }) => {
  this.setState({ value })
  return this.state.value
}

///need to find a way to capture state of this dropdown and place into this callback
// props.filterBySort = (this.state.value) => {
//
// }


render(){
  console.log(this.state)
  const { value } = this.state
  const choices= [
    {
      text: 'Price Low to High',
      value: 'Price Low to High'
    },
    {
      text: 'Price High to Low',
      value: 'Price High to Low'
    },
    {
      text: 'Condition',
      value: 'Condition'
    },
    {
      text: 'Brand',
      value: 'Brand'
    }
  ]
  return(
    <React.Fragment>
        <Dropdown
          fluid selection options={this.choices}
          size='small'
          onChange={(e, { value })=>this.props.filterBySort(e, { value })}
          placeholder='Sort By'
          name="choices"
          selection
          options={choices}
          value={value}
        />
    </React.Fragment>
  )}
}

export default SortBy;
// <select>
//   {this.choices.map( option =>
//     <option key={option.value} value={option.value}>{option.text}</option>
//   )}
// </select>

// <Dropdown
// onChange={(e)=> this.handleChange(e)}
// placeholder='Sort By'
// fluid selection options={this.choices}
// />
