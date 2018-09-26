import React from 'react';
import { Input } from 'semantic-ui-react'



const SearchInput = (props) => {




  return(
    <Input placeholder="Search..." onChange={(e)=>props.handleChange(e.target.value)}></Input>
  )



}

export default SearchInput;
