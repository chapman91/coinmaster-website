// Client side 
"use client";

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
       <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/how-to-buy">How to Buy</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/" eventKey="link-1">Tokenomics</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link eventKey="link-2">Blog</Nav.Link>
      </Nav.Item> */}
      <Nav.Item>
        <Nav.Link href="./buy-now" eventKey="link-3">
          Buy Now
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">
          Socials
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavigationBar;


// Add bootstrap css