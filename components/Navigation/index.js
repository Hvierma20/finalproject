import React from 'react';
// import { Link } from 'react-router-dom';

 
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';


const Navigation = () => (
    <div>
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
      </AuthUserContext.Consumer>
    </div>
  );
 
  const NavigationAuth = () => (
   
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
        <Nav.Link href={ROUTES.HOME}>Home</Nav.Link>
        <Nav.Link href={ROUTES.PEOPLE}>People</Nav.Link>
        <Nav.Link href={ROUTES.ACCOUNT}>Account</Nav.Link>
        <Nav.Link href={ROUTES.ADMIN}>Admin</Nav.Link>
      </Nav>

        <Form inline>
          <SignOutButton />
        </Form>
    </Navbar>
  );
 
  const NavigationNonAuth = () => (
  
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
      <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
      
      <Nav.Link href={ROUTES.SIGN_IN}>Sign In</Nav.Link>
      </Nav>
    </Navbar>
     
    
  );

export default Navigation;
