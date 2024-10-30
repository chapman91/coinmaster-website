// Client side 
"use client";

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import styles from '../../../styles/NavigationBar.module.css';




function NavigationBar() {
  return (  
   <Navbar expand="md" className={`${styles.backgroundNav} mb-3`}>
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
   <Nav className={`${styles.navContainer}`} justify variant="tabs" defaultActiveKey="/home">
       <Nav.Item className={styles.navItem}>
        <Nav.Link href="/home" className={`${styles.customNavLink} ${styles.navLinkBold}`}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.navItem}>
        <Nav.Link href="/how-to-buy" className={`${styles.customNavLink} ${styles.navLinkBold}`}>How to Buy</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.navItem}>
        <Nav.Link href="/" eventKey="link-1" className={`${styles.customNavLink} ${styles.navLinkBold}`}>Tokenomics</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.navItem}>
        <Nav.Link href="./buy-now" eventKey="link-3" className={`${styles.customNavLink} ${styles.navLinkBold}`}>
          Buy Now
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Socials" id="basic-nav-dropdown" className={`${styles.customNavLink} ${styles.navLinkBold}`}>
        <NavDropdown.Item href="https://X.com">X</NavDropdown.Item>
        <NavDropdown.Item href="https://telegram.com">Telegram</NavDropdown.Item>
        <NavDropdown.Item href="https://coinmarketcap.com">CoinMarketCap</NavDropdown.Item>
        <NavDropdown.Item href="https://coingecko.com">CoinGecko</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

export default NavigationBar;


// Add bootstrap css