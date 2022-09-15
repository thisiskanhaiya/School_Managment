import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddStudent(props) { 

    function getData(e) {      
        props.parentCallback(e.target.firstNameInput.value,e.target.lastNameInput.value,e.target.emailInput.value);
        e.target.firstNameInput.value="" 
        e.target.lastNameInput.value=""
        e.target.emailInput.value=""
        e.preventDefault();
    }

  return (
    <Form onSubmit={getData} type="submit" className='container text-center mt-3 pt-3'> 
      <Form.Group className="mb-3">
        <Form.Control type="text" name = "firstNameInput" placeholder="Enter First Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control name = "lastNameInput" type="text" placeholder="Enter Last Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control name = "emailInput" type="email" placeholder="Enter email" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Student
      </Button>
    </Form>
  );
}

export default AddStudent;