import SearchBar from './contents/SearchBar';
import SearchResult from './contents/SearchResult';

import { Container, Row, Col } from 'react-bootstrap';

const Content = () => {
  const sidebarWidth = 2;
  const contentWidth = 12 - sidebarWidth;

  return(
    <Container fluid>
      <Row>
        <Col md={sidebarWidth} className='side-bar'><SearchBar /></Col>
        <Col md={contentWidth} className='search-result'><SearchResult /></Col>
      </Row>
    </Container>
  )
}

export default Content;