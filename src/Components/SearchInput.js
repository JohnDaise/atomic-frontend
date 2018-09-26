import React from 'react';
import { Input, Segment } from 'semantic-ui-react'



const SearchInput = (props) => {




  return(
     <Segment >
       <Input  size='large' placeholder="Search..." onChange={(e)=>props.handleChange(e.target.value)}></Input>
    </Segment>
  )



}

export default SearchInput;
