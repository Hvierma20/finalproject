import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';



const Footer = () => (

<Navbar className="footer-style" sticky="bottom" bg="dark" variant="light">
  <Container>
    <Navbar.Brand ><small>Copyright &copy; Hermes Vierma</small></Navbar.Brand>
  </Container>
</Navbar>

)

export default Footer;