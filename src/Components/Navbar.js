import React from 'react';
import { Image, Button } from 'semantic-ui-react'




const Navbar = (props) => {
  return(
    <div>
      <Button floated='left' inverted size='huge' onClick={()=> console.log('Render Home Page')} > Home </Button>
       <Button.Group vertical floated='right'>
         <Button floated='right' inverted size='huge' onClick={()=> console.log('Render Sign In/Out Form')}> Sign In/Out</Button>
         <Button floated='right' inverted size='huge' onClick={()=> console.log('Render Add to Inventory Form')}>Add To Inventory </Button>
        </Button.Group>
    <Image src={require(`../atomicnewlogo.jpg`)} size='small' circular centered/>
    </div>
  )



}

export default Navbar;
