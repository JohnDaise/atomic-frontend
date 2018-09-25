import React from 'react';
import {  } from 'semantic-ui-react'

import SearchButton from '../Components/SearchButton';
import SearchInput from '../Components/SearchInput';
import SortBy from '../Components/SortBy';




const Filter = (props) => {


  return(
    <React.Fragment>
      <SortBy />
      <SearchInput handleChange={props.handleChange} />
      <SearchButton filterList={props.filterList}/>
    </React.Fragment>
  )



}

export default Filter;
