import React from 'react';
import { Input } from 'semantic-ui-react'



const SearchInput = (props) => {

///use function here to capture value of input

this.handleInput = (e) => {
  props.handleChange(e.target.value)
}

  return(
    <Input placeholder="Search..." onChange={(e)=>this.handleInput(e)}></Input>
  )



}

export default SearchInput;
