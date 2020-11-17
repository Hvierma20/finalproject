import React from 'react';
 
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { Container } from 'react-bootstrap';



 
const AccountPage = () => (
<Container>
  <AuthUserContext.Consumer>
    {authUser => (
     
        <div>
          <h2>{authUser.email}</h2>
          <PasswordForgetForm />
          <br/>
          <PasswordChangeForm />
        </div>
      
    )}
  </AuthUserContext.Consumer>
</Container>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);