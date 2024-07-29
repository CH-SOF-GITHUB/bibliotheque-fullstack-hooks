import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const Menu = () => {
  return (
      <Navbar bg="primary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand>
            <h4>
              <Badge bg="secondary" className='p-3'><i class="fa-solid fa-book-bible"></i>  Bibliotheque</Badge>
            </h4>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/livres"><Badge bg="warning">articles</Badge></Nav.Link>
            <Nav.Link as={Link} to="/livres/card"><Badge bg="success">cartes</Badge></Nav.Link>
            <Nav.Link as={Link} to="/auteurs"><Badge bg="danger">auteurs</Badge></Nav.Link>
            <Nav.Link as={Link} to="/editeurs"><Badge bg="dark">editeurs</Badge></Nav.Link>
            
          </Nav>
        </Container>
        <Form className="d-flex" style={{marginRight: "25px"}}>         
          <FormControl          
              type="search"           
              placeholder="Search"           
              className="me-2"           
              aria-label="Search"         
          />         
          <Button variant="success w-100">Chercher</Button>       
        </Form> 
      </Navbar>
  )
}

export default Menu
