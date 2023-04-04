import { useState } from "react";
import Overlay from "./utils/Overlay";
import { Button, Container, Form, Nav, Navbar, OverlayTrigger, Popover } from 'react-bootstrap';
import logo from '../assets/images/download.svg';

export function Header() {
  const [focused, setFocused] = useState(false);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} width='30px' height='30px' alt='logo' /></Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            variant="tabs"
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Overlay connect="#action1" icon="house" title="Home" />
            <Overlay connect="#action2" icon="search" title="Search" />
            <Overlay connect="#action3" icon="box-arrow-in-right" title="Engage" />
            <Overlay connect="#action4" icon="recycle" title="Enrich" />
          </Nav>
          <Form className="d-flex search-form">
            <Button>Get Unlimited Leads</Button>
            <OverlayTrigger
              trigger={['hover', 'focus']}
              key={'bottom'}
              placement={'bottom'}
              show={focused}
              overlay={
                <Popover className="search-popover"
                  id={`popover-positioned-${'bottom'}`}
                >
                  <Popover.Body
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="search-overlay-body">
                    <div>
                      <div>Search by popular filters:
                        <a href="#action1" className="search-choice">People</a>
                        <a href="#action2" className="search-choice">Companies</a>
                      </div>
                      <div>
                        <a href="#action3" className="search-plus"><i className="bi bi-plus" />Job Titles</a>
                        <a href="#action4" className="search-plus"><i className="bi bi-plus" />Company</a>
                        <a href="#action5" className="search-plus"><i className="bi bi-plus" />Industry</a>
                        <a href="#action6">See All 30 Filters</a>
                      </div>
                    </div>
                    <div className="search-bottom">
                      Search for people, companies, sequences and more...
                    </div>
                  </Popover.Body>
                </Popover>
              }
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className={focused ? "me-2 search-focused" : "me-2"}
                aria-label="Search"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
            </OverlayTrigger>

          </Form>
          <Nav.Link href="#action5"><i className="bi bi-telephone"></i></Nav.Link>
          <Nav.Link href="#action6"><i className="bi bi-bell"></i></Nav.Link>
          <Nav.Link href="#action7"><i className="bi bi-gear"></i></Nav.Link>
          <Nav.Link href="#"><i className="bi bi-person-circle"></i></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;