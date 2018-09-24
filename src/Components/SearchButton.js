import React from 'react';
import { Button } from 'semantic-ui-react'



const SearchButton = (props) => {

this.handleClick = (e) => {
  e.preventDefault();
  props.filterList()
}

  return(
    <Button onClick={(e)=> this.handleClick(e)}> Search Inventory </Button>
  )



}

export default SearchButton;
