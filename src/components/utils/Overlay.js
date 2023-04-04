import { useState, useMemo } from 'react';
import { OverlayTrigger, Popover, Nav, Row, Col } from 'react-bootstrap';
import subMenus from '../../constants/Submenu';
import OverlayItem from './Overlayitem';

function Overlay({ connect, icon, title }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseLeave = () => {
    setShowTooltip(false);
  }

  const handleMouseEnter = () => {
    setShowTooltip(true);
  }

  const menuItems = useMemo(() => subMenus.map((item, index) =>
    <Col md="6" className='overlay-item' key={index}>
      <OverlayItem item={item} key={index} />
    </Col>
  ), [subMenus]);

  return (
    <OverlayTrigger
      trigger={['hover', 'focus']}
      key={'bottom'}
      placement={'bottom'}
      show={showTooltip}
      overlay={
        <Popover
          id={`popover-positioned-${'bottom'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Popover.Body className="overlay-body">
            <Row className='overlay-row'>
              {menuItems}
            </Row>
          </Popover.Body>
        </Popover>
      }
    >
      <Nav.Link
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        href={connect}
      >
        <i className={'bi bi-' + icon}></i>{title}
      </Nav.Link>
    </OverlayTrigger>
  );
}

export default Overlay ;