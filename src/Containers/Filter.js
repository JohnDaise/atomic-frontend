import React from 'react';
import { Image, Button, Grid, Input } from 'semantic-ui-react'

import SearchButton from '../Components/SearchButton';
import SearchInput from '../Components/SearchInput';




const Filter = (props) => {


  return(
    <div>
      <SearchInput handleChange={props.handleChange} />
      <SearchButton filterList={props.filterList}/>
    </div>
  )



}

export default Filter;
