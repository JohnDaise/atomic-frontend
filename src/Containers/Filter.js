import React from 'react';
import {  } from 'semantic-ui-react'

import SearchInput from '../Components/SearchInput';
import SortBy from '../Components/SortBy';




const Filter = (props) => {


  return(
    <React.Fragment>
      <SortBy filterBySort={props.filterBySort}/>
      <SearchInput filterList={props.filterList} handleChange={props.handleChange} />
    </React.Fragment>
  )



}

export default Filter;
