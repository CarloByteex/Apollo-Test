import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SubMenu() {

  return (
    <Navbar bg="light" variant="light">
      <Container fluid>
        <Nav className="me-auto" >
          <Nav.Link href="#hide"><i className='bi bi-filter-square' /></Nav.Link>
          <Nav.Link href="#total">Total (9.5M)</Nav.Link>
          <Nav.Link href="#net">Net New (9.5M)</Nav.Link>
          <Nav.Link href="#saved">Saved</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets" className="menu-icon"><i className='bi bi-card-list' /></Nav.Link>
          <Nav.Link href="#memes" className="menu-icon"><i className='bi bi-file-spreadsheet' /></Nav.Link>
          <Nav.Link href="#memes" className="menu-icon"><i className='bi bi-table' /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )

}

export default SubMenu;