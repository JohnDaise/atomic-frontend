import React from 'react';
import { Image } from 'semantic-ui-react'




const Navbar = (props) => {
  return(
    <div>
    <Image src={require(`../atomicnewlogo.jpg`)} size='small' circular centered/> <br/>
        <strong>"This is the Navigation Bar"</strong>
    </div>
  )



}

export default Navbar;
