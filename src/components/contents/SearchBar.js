import { useState } from 'react';

import SearchContent from '../utils/SearchContent';

import Form from 'react-bootstrap/Form';
import sideBars from '../../constants/Sidebar';
import Button from 'react-bootstrap/Button';

function SearchBar() {

  const [openedIndex, setOpenedIndex] = useState(-1);

  const handleClick = (index) => {
    setOpenedIndex(index);
    if (index === openedIndex) {
      setOpenedIndex(-1);
    }
  }

  return (
    <>
      <div className='side-tab'>
        <Form className="d-flex search-form">
          <i className='bi bi-search' />
          <Form.Control
            type="search"
            placeholder="Search Companies..."
            aria-label="Search"
          />
        </Form>
      </div>
      <div className='side-tab'>
        Filters
      </div>
      {sideBars.map((item, index) => {
        const opened = openedIndex === index;
        if (opened && !item.locked) {
          return (
            <div className='side-tab opened' key={index} >
              <div className='side-tab-header' onClick={() => handleClick(index)}>
                <div>
                  <i className={item.icon} />
                  {item.title}
                </div>
                <i className='bi bi-caret-up-fill' />
              </div>
              {!item.locked && opened && <SearchContent />}
            </div>
          )
        } else {
          return (
            <div className={item.locked ? "side-tab side-tab-locked" : "side-tab"} key={index} onClick={() => handleClick(index)}>
              <div className='side-tab-header'>
                <div>
                  <i className={item.icon} />
                  {item.title}
                </div>
                {!item.locked && !opened && <i className='bi bi-caret-down-fill' />}
                {item.locked && <i className='bi bi-lock lock' />}
              </div>
            </div>
          )
        }
      })}

      <div className='fixed-tab'>
        <Button>More Filters<i className='bi bi-box-arrow-up-right' /></Button>
      </div>
    </>
  )
}

export default SearchBar;