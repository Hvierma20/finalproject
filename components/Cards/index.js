import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import { Container } from 'react-bootstrap';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { AuthUserContext } from '../Session';





class Cards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }


  componentDidMount() {
    let formRef = this.props.firebase.db.ref('form').orderByKey();
    formRef.on('child_added', snapshot => {
      const { name, lastname, email, city, phone, linkedin, github,  message } = snapshot.val();
      const data = { name, lastname, email, city, phone, linkedin, github, message, id: snapshot.key };
      this.setState({ form: [data].concat(this.state.form) });
    })
    formRef.on('child_removed', snapshot => {
      this.setState({ form: this.state.form.filter(card=>card.id!==snapshot.key) });
    })
  }


deleteCard=(id)=>{
  this.props.firebase.db.ref(`form/${id}`).remove();
}
  render() {
    return (
        this.state.form.map(form =>
            <div className='row' key = {form.phone}>
                {/* <Col> */}
                    <div className='card-body' style={{margin: '0px 0px 30px', padding: '20px'}} key = {form.phone}>
                        <Card border="success" style={{ width: '18rem'}} bg='Dark' key = {form.phone} >
                            <Card.Body className="text-center">
                                <Card.Title as="h2" style ={{padding: '10px'}} className="header">{form.name} {form.lastname}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{form.city}</Card.Subtitle>
                                <ListGroup className="list-group-flush">
                                    <Card.Subtitle as="h5" href="phone" >{form.phone}</Card.Subtitle>
                                    <Card.Link  href={`mailto:${form.linkedin}`} className='card-link' >{form.linkedin}</Card.Link>
                                    <Card.Link  href={`mailto:${form.github}`} className='card-link' >{form.github}</Card.Link>
                                    {/* <ListGroup.Item> */}
                                    <Card.Link href={`mailto:${form.email}`} className='card-link' >{form.email}</Card.Link>
                                    {/* </ListGroup.Item> */}
                                </ListGroup>
                                <Card.Text>
                                {form.message}
                                </Card.Text>
                                <AuthUserContext.Consumer>
                                    {authUser => (
                                      authUser.email === form.email ? <Button onClick ={()=> this.deleteCard(form.id)} className ="btn btn-info">Delete</Button> : ""
                                )}</AuthUserContext.Consumer>
                            </Card.Body>
                        </Card>      
                    </div>
                {/* </Col> */}
            </div>
            

        )
    );
  }
}


export default withFirebase(Cards);
  