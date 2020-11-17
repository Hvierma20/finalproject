import React from 'react';
import Forma from '../Forma';
import Cards from '../Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import * as ROUTES from '../../constants/routes';
import './index.css';

 
import { withAuthorization } from '../Session';
 
const HomePage = () => (
  // <div className="main-page">

  <Container>
   <Row>
    <Col className='col-md-4'>
      <Forma /> 
    </Col>
    <Col className='col-md-4'> 
    <Carousel>
      <Carousel.Item>
        <Cards/> 
      </Carousel.Item>
    </Carousel>
    </Col>
    <Col className='col-md-4'> 
      <h2>Go to "People" to see everybody</h2>
      <div className="button-home" style={{ align: `center` }}>
      <Button href={ROUTES.PEOPLE} className ="btn btn-info">People</Button>
      </div>
    </Col>
      
    </Row>
  </Container>
    

  
);
 

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);