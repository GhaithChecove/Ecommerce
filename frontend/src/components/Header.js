import React from 'react'
import { Container, Row, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
  return (

    <header>


      <Navbar expand="lg" bg="dark" variant='dark' collapseOnSelect>
        <Container>


          
          <LinkContainer to={'/'}>
            <Navbar.Brand >Snowfalks</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">



              <LinkContainer to={'/'}>
                <Nav.Link ><i className='fa fa-home'></i>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/product'}>
                <Nav.Link ><i className='fa fa-shopping-cart'></i>Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/login'}>
                <Nav.Link href="#link"><i className='fa fa-user'></i>LogIn</Nav.Link>
              </LinkContainer>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  )
}

export default Header