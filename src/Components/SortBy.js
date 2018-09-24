import React from 'react';
import { Dropdown } from 'semantic-ui-react'




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

  console.log(e.currentTarget)
}


  return(
    console.log(this.choices),
    <div>
      <select>
        {this.choices.map( option =>
          <option value={option.value}>{option.text}</option>
        )}
      </select>
    </div>
  )
}

export default SortBy;

// <Dropdown
// onChange={(e)=> this.handleChange(e)}
// placeholder='Sort By'
// fluid selection options={this.choices}
// />
