import { Row, Col } from 'react-bootstrap';

function OverlayItem({ item }) {
  const { icon, title, desc } = item;

  return (
    <Row>
      <Col md="3">
        <i className={`${icon} submenu-icon`}></i>
      </Col>
      <Col md="9">
        <Row className="submenu-title">{title}</Row>
        <Row className="submenu-desc">{desc}</Row>
      </Col>
    </Row>
  );
}

export default OverlayItem;