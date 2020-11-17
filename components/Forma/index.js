import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
// import Cards from '../Cards';
import './index.css';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


// import { Container, Card } from 'react-bootstrap';


class Forma extends Component {

  // inicializamos nuestro estado inicial
  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  // Mostrar una alerta cuando se envia el formulario
  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000)
  }

// Con esta funcion borramos todos los elementos del formulario
resetForm() {
  this.refs.contactForm.reset();
}


// Funcion para enviar la informacion del formulario a Firebase Database
sendMessage(e) {
  // Detiene la acción predeterminada del elemento
e.preventDefault();
    
    // Creamos un objeto con los valores obtenidos de los inputs
    const params = {
      name: this.inputName.value,
      lastname: this.inputLastname.value,
      email: this.inputEmail.value,
      github: this.inputGithub.value,
      linkedin: this.inputLinkedin.value,
      city: this.inputCity.value,
      phone: this.inputPhone.value,
      message: this.textAreaMessage.value
    };
    
    // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
    if (params.name && params.email && params.phone && params.phone && params.message) {
      // enviamos nuestro objeto "params" a firebase database
      this.props.firebase.db.ref('form').push(params).then(() => {
        // Si todo es correcto, actualizamos nuestro estado para mostrar una alerta.
        this.showAlert('success', 'Your message was sent successfull');
      }).catch((error) => {
        // Si ha ocurrido un error, actualizamos nuestro estado para mostrar el error 
        console.log(error)
        this.showAlert('danger', 'Your message could not be sent');
      });
      // limpiamos nuestro formulario llamando la funcion resetform
      this.resetForm();
    } else {
      // En caso de no llenar los elementos necesario despliega un mensaje de alerta
      this.showAlert('warning', 'Please fill the form');
    };
  }

  render() {
    return (
  
      <Form className="login-box" onSubmit={this.sendMessage.bind(this)} ref='contactForm' >
       
            {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
              <div className='container'>
                {this.state.alertData.message}
              </div>
            </div>}
              {/* <div className='container' style={{ padding: `40px 0px` }}> */}
             
                {/* <Col className='col-md-4'> */}
                  <h2>Profile Info</h2>
                  <div >
                    <div className='form-group'>
                      <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' className='form-control' id='name' 
                          placeholder='Name' ref={name => this.inputName = name} 
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='name'>Last Name</label>
                        <input type='text' className='form-control' id='lastname' 
                          placeholder='Last Name' ref={lastname => this.inputLastname = lastname} 
                        />
                      </div>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='exampleInputEmail1'>Email</label>
                      <input type='email' className='form-control' id='email' 
                        placeholder='Email' ref={email => this.inputEmail = email} 
                      />
                    <br/>
                      <label htmlFor='exampleInputLinkedin'>Linkedin</label>
                      <input type='text' className='form-control' id='linkedin' 
                            placeholder='Linkedin' ref={linkedin => this.inputLinkedin = linkedin} 
                          />
                      <label htmlFor='exampleInputGithub'>Github</label>
                      <input type='text' className='form-control' id='github' 
                          placeholder='Github' ref={github=> this.inputGithub = github} 
                        />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='city'>State</label>
                      <select className='form-control' id='city' ref={city => this.inputCity = city}>
                        <option value='Illinois'>Illinois</option>
                        <option value='North Carolina'>North Carolina</option>
                        <option value='New York'>New York</option>
                        <option value='California'>California</option>
                        <option value='Indiana'>Indiana</option>
                        <option value='South Carolina'>South Carolina</option>
                        <option value='Florida'>Florida</option>
                        <option value='Georgia'>Georgia</option>
                        <option value='Michigan'>Michigan</option>
                        <option value='Orgeon'>Oregon</option>
                        <option value='Texas'>Texas</option>
                        <option value='Arizona'>Arizona</option>

                      </select>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='phone'>Phone</label>
                      <input type='number' className='form-control' id='phone' 
                        placeholder='(xxx)xxx-xxxx' ref={phone => this.inputPhone = phone} 
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='message'>Tell about yourself</label>
                      <textarea className='form-control' id='message' 
                        rows='3' ref={message => this.textAreaMessage = message}>
                      </textarea>
                    </div>
                    <button type='submit' className="btn btn-info">Send</button>
                  </div>
                {/* </Col> */}
              
                {/* <Cards /> */}
       
       
      </Form>
    );
  }
}



export default withFirebase(Forma);