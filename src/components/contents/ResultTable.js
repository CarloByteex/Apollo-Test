import { useState } from 'react';

import companies from '../../constants/Companies';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function ResultTable() {

  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    setNumber(prevNumber => e.target.checked ? prevNumber + 1 : prevNumber - 1);
  }

  return (
    <Container fluid className='table-container'>
      <div className='command-container'>
        <div className='left-container'>
          <Dropdown>
            <Dropdown.Toggle variant='light' disabled={!number}>
              {number && `${number} selected`}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Select this page</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Select all companies</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Advanced section</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {number !== 0 && <Button style={{ 'backgroundColor': 'cornflowerblue', 'color': 'white' }}><i className='bi bi-plus' />Save</Button>}
          {number === 0 && <Button disabled><i className='bi bi-plus' />Save</Button>}
          <Button disabled={number === 0 ? true : false} variant='light'><i className='bi bi-person-add' />Find People</Button>
          <Dropdown>
            <Dropdown.Toggle disabled={number === 0 ? true : false} variant='light'>
              <i className='bi bi-list' />Lists
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Add to lists</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button disabled={number === 0 ? true : false} variant='light'><i className='bi bi-download' />Export</Button>
          <Dropdown >
            <Dropdown.Toggle disabled={number === 0 ? true : false} variant='light'>
              <i className='bi bi-pen' />Edit
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Set Stage</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {number === 0 && <Dropdown>
          <Dropdown.Toggle variant='light'>
            <i className='bi bi-sort-down' />Relevance
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Dropdown >
                <Dropdown.Toggle variant='light'>
                  Relevance
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Relevance</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">name</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Industry</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Item>
              <Dropdown >
                <Dropdown.Toggle variant='light'>
                  Descending
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Ascending</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Descending</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Item><Button variant='light'>Apply</Button></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>}
      </div>
      <div className='table-wrapper'>
        <Table>
          <thead>
            <tr>
              <th className='sortable'>Company</th>
              <th>Actions</th>
              <th className='sortable'>Employees</th>
              <th className='sortable'>Industry</th>
              <th>keywords</th>
              <th>Company Location</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((item, index) => {
              return (
                <tr key={index}>
                  <td className='company-column'>
                    <Form.Check type="checkbox" id={item.id} onChange={handleChange} />
                    <img src={item.logo_url} width="35px" height="35px" alt='logo' />
                    <div className='url-container'>
                      <div className='name-container'><a href={item.angellist_url}>{item.name}</a></div>
                      <div className='link-container'>
                        <div className='tooltip'><i className='bi bi-link-45deg' /><span className='tooltiptext'>{item.website_url}</span></div>
                        <div className='tooltip'><i className='bi bi-linkedin' /><span className='tooltiptext'>{item.linkedin_url}</span></div>
                        <div className='tooltip'><i className='bi bi-facebook' /><span className='tooltiptext'>{item.facebook_url}</span></div>
                        <div className='tooltip'><i className='bi bi-twitter' /><span className='tooltiptext'>{item.twitter_url}</span></div>
                      </div>
                    </div>
                  </td>
                  <td style={{ 'maxWidth': '280px', 'minWidth': '160px' }}><Button><i className='bi bi-plus' />Save</Button></td>
                  <td style={{ 'maxWidth': '100px' }}>1234567</td>
                  <td style={{ 'maxWidth': '160px' }}><div className='tooltip'>Information Tech...<span className='tooltiptext'>Information Technology</span></div></td>
                  <td style={{ 'maxWidth': '160px' }}><div className='tooltip'>ecommerce, retai...<span className='tooltiptext'>ecommerce, retail, entertainment, chatGPT, virtual reality, android, address book</span></div></td>
                  <td style={{ 'maxWidth': '250px' }}>Seattle, Washington</td>
                </tr>
              )
            })}
          </tbody>
        </Table>

      </div>
    </Container>
  )
}

export default ResultTable;