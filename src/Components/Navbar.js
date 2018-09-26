import React from 'react';
import { Image, Button, Icon } from 'semantic-ui-react'
import FavoriteList from './FavoriteList'



class Navbar extends React.Component{
  render(){
  return(
    <React.Fragment>
        <Button floated='left' inverted size='huge' onClick={()=> console.log('Render About Page')}> <Icon name='content' /> About </Button>
        <Button floated='left' inverted size='huge' onClick={()=> console.log('Render Favorite List')} >
        <Icon name='heart' />
        Favorites
        </Button>
      <Button.Group vertical floated='left'>
      </Button.Group>
      <Button floated='right' inverted size='huge' onClick={()=> console.log('Render Sign In/Out Form')}> <Icon name='sign in' />Sign In/Out</Button>
      <Button floated='right' inverted size='huge' onClick={()=> console.log('Render Add to Inventory Form')}> <Icon name='plus circle' />Add To Inventory </Button>
       <Button.Group vertical floated='right'>

        </Button.Group>
    <Image onClick={()=> console.log('Redirect to Home')} src={require(`../atomicnewlogo.jpg`)} size='small' circular centered/>
    </React.Fragment>
    )
  }
}

export default Navbar;
