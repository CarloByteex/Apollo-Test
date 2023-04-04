import { useState } from "react";

import Form from 'react-bootstrap/Form';

function SearchContent() {

  const [check, setCheck] = useState(0);

  const handleChange = (e) => {
    let value = e.target.value;
    console.log(value);
    switch (value) {
      case 'radio1':
        setCheck(0);
        break;
      case 'radio2':
        setCheck(1);
        break;
      case 'radio3':
        setCheck(2);
        break;
      default:
    }
  }

  return (
    <div className="search-content">
      <div className={check===0?"radio-container checked": "radio-container"}>
        <Form.Check type="radio" label="Predefined Range" name="radio1" id="radio1" value="radio1" onChange={handleChange} checked={check === 0} />
        {check===0 && <div>
          <Form.Check type="checkbox" label="1-10" />
          <Form.Check type="checkbox" label="11-20" />
          <Form.Check type="checkbox" label="21-50" />
          <Form.Check type="checkbox" label="51-100" />
          <Form.Check type="checkbox" label="101-200" />
          <Form.Check type="checkbox" label="201-500" />
          <Form.Check type="checkbox" label="501-1000" />
          <Form.Check type="checkbox" label="1001-2000" />
          <Form.Check type="checkbox" label="2001-5000" />
          <Form.Check type="checkbox" label="5001-10000" />
          <Form.Check type="checkbox" label="10001+" />
        </div>}
      </div>
      <div className={check===1?"radio-container checked": "radio-container"}>
        <Form.Check type="radio" label="Custom Range" name="radio2" id="radio2" value="radio2" onChange={handleChange} checked={check === 1} />
        {check===1 && <div className="range">
          <Form.Control type="text" placeholder="Min" />
          -
          <Form.Control type="text" placeholder="Max" />
        </div>}
      </div>
      <div className={check===2?"radio-container checked": "radio-container"}>
        <Form.Check type="radio" label="# of employee is unknown" name="radio3" id="radio3" value="radio3" onChange={handleChange} checked={check === 2} />
      </div>
    </div>
  )

}

export default SearchContent;