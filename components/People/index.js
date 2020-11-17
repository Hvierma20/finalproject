
import React from 'react';


import Cards from '../Cards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';






const PeoplePage = () => (
  <Container>
     <Row>
       <Col>
          <div className="wrapper">
            <Cards />
          </div>
        </Col>
      </Row>
  </Container>
    )



 
export default (PeoplePage);