import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton';

import Kelmone from './Kelmone';
import TTTrade from './TTTrade';
import Rahmone from './Rahmone';


export default function Portfolio() {

  const [current, setCurrent] = React.useState({
    name: "Kelmone School of Motoring",
    comp: <Kelmone/>
  })

  const handleSelect = (e) => {
    
    if (e === "1") {
      setCurrent({
        name: "Kelmone School of Motoring",
        comp: <Kelmone/>
      })
    } else if (e === "2") {
      setCurrent({
        name: "TT Trade Quotes",
        comp: <TTTrade/>
      })
    } else if (e === "3") {
      setCurrent({
        name: "RahmoneTK",
        comp: <Rahmone/>
      })
    }   
  }

  return (
    <Col className="content-border p-5 offset-2 work-sans-300">
      <h1 className="primary work-sans-200"> Portfolio </h1>
      <hr className="hr" />
      <DropdownButton title={current.name} className="dropdown mb-4">
        <Dropdown.Item eventKey="1" onSelect={(eventKey) => handleSelect(eventKey)}>Kelmone School of Motoring</Dropdown.Item>
        <Dropdown.Item eventKey="2" onSelect={(eventKey) => handleSelect(eventKey)}>TT Trade Quotes</Dropdown.Item>
        <Dropdown.Item eventKey="3" onSelect={(eventKey) => handleSelect(eventKey)}>RahmoneTK</Dropdown.Item>
    </DropdownButton>
      {current.comp}
    </Col>
  );
}
