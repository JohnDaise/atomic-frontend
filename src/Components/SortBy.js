import React from 'react';
import {  } from 'semantic-ui-react'




const SortBy = (props) => {

  this.choices = [
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


this.handleChange = (e) => {
""
}


  return(
    <React.Fragment>
      <select>
        {this.choices.map( option =>
          <option key={option.value} value={option.value}>{option.text}</option>
        )}
      </select>
    </React.Fragment>
  )
}

export default SortBy;

// <Dropdown
// onChange={(e)=> this.handleChange(e)}
// placeholder='Sort By'
// fluid selection options={this.choices}
// />
