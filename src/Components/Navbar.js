import React from 'react';
import { Image, Button, Grid } from 'semantic-ui-react'




const Navbar = (props) => {
  return(
    <div>
      <Button floated='left' inverted size='huge' > Home </Button>
       <Button.Group vertical floated='right'>
         <Button floated='right' inverted size='huge'> Sign In/Out</Button>
         <Button floated='right' inverted size='huge'> Sign Up </Button>
        </Button.Group>
    <Image src={require(`../atomicnewlogo.jpg`)} size='small' circular centered/>
    </div>
  )



}

export default Navbar;
