import { FC, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactForm: FC = () => {
  const [ contact, setContact ] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <Form 
      onSubmit={handleOnSubmit}
      className='contact-form'
    >
      <Form.Group controlId='firstname'>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          className='firstName'
          name='firstName'
          value={contact.firstName}
          type='text'
          onChange={handleOnChange}
        />
      </Form.Group>









    </Form>











  )
























}

