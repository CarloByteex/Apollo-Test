import {Container, Nav, Navbar} from 'react-bootstrap';


function SubHeader() {

  return (
    <Navbar bg="light" variant="light">
      <Container fluid>
        <Nav className="me-auto" >
          <Nav.Link href="#people"><i className="bi bi-people" />People</Nav.Link>
          <Nav.Link href="#companies"><i className="bi bi-building" />Companies</Nav.Link>
          <Nav.Link href="#lists"><i className="bi bi-card-list" />Lists</Nav.Link>
          <Nav.Link href="#saved"><i className="bi bi-search-heart" />Saved Searches</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default SubHeader;