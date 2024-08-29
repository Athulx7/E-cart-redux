import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
//useselector hook is used to access state available store 
const wishlist = useSelector((state)=>state.wishlistRedeucer)
console.log("wishlisdt redcer")
console.log(wishlist)

const cart = useSelector((state)=>state.cartReducer)

  return (
    <>

<Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="/" style={{color:'white'}}> <i class="fa-solid fa-cart-shopping me-2 fa-bounce"></i> E-KART</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto " >
            <Link to='/wishlist' style={{color:'white',textDecoration:'none'}}>
            WISHLIST  <Badge bg="secondary" className='ms-1 fs-6'>{wishlist.length}</Badge>
            </Link>
            <Link to='/cart'  style={{color:'white',textDecoration:'none',marginLeft:'10px'}}>
            CART  <Badge bg="secondary" className='ms-1 fs-6'>{cart.length}</Badge>
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
