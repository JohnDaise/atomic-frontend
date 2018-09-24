import React from 'react';
import { Image, Button, Grid, Input } from 'semantic-ui-react'

import SearchButton from '../Components/SearchButton';
import SearchInput from '../Components/SearchInput';
import SortBy from '../Components/SortBy';




const Filter = (props) => {


  return(
    <div>
      <SortBy />
      <SearchInput handleChange={props.handleChange} />
      <SearchButton filterList={props.filterList}/>

    </div>
  )



}

export default Filter;
