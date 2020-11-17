import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import { Container } from 'react-bootstrap';
import './index.css';
import Button from 'react-bootstrap/Button';
import * as ROUTES from '../../constants/routes';
 
import Footer from '../Footer';


const Landing = () => (
  <div >
    <div className="containerJumbo">
    
      <Jumbotron fluid>
        <Container style={{ align: `center` }}>
        
          <h1 className="text-landing"> Alumni-CTD</h1>
          <h2 className="text-landing"> 
          This is a network of former Code the Dream
          <br></br>
          students looking to connect. 
          </h2>
          <h4 className="text-landing">If you already signed in click Home to find people</h4>
          <div className="button-landing" style={{ align: `center` }}>
            <Button style={{ align: `center` }} href={ROUTES.HOME} className ="btn btn-info">Home</Button>
          </div>
        
      
        </Container>
      </Jumbotron>
      <Footer />
    </div>
  </div>
);
 
export default Landing;