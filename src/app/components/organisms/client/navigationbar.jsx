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
    <Container fluid>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className={`mx-auto justify-content-center ${styles.navContainer}`} justify variant="tabs" defaultActiveKey="/home">
       <Nav.Item className={styles.navItem}>
        <Nav.Link href="/home" className={`${styles.customNavLink} ${styles.navLinkBold}`} style={{ borderRadius: '0', border: 'none' }}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.navItem}>
        <Nav.Link href="/how-to-buy" className={`${styles.customNavLink} ${styles.navLinkBold}`} style={{ borderRadius: '0', border: 'none' }}>How to Buy</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.navItem}>
        <Nav.Link href="/" eventKey="link-1" className={`${styles.customNavLink} ${styles.navLinkBold}`} style={{ borderRadius: '0', border: 'none' }}>Tokenomics</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.navItem}>
        <Nav.Link href="./buy-now" eventKey="link-3" className={`${styles.customNavLink} ${styles.navLinkBold}`} style={{ borderRadius: '0', border: 'none' }}>
          Buy Now
        </Nav.Link>
      </Nav.Item>
      
            {/* NavDropdown */}
  <NavDropdown 
  title="Socials" 
  id="basic-nav-dropdown" 
  className={`${styles.dropdownContainer} ${styles.customNavLink} ${styles.navLinkBold} ${styles.dropdownToggle}`} 
  style={{ color: 'white', borderRadius: '0', border: 'none' }}
>
  <div className={styles.dropdownItemsContainer}>
    <NavDropdown.Item 
      href="https://X.com" 
      className={styles.dropdownItem}
    >
      X
    </NavDropdown.Item>
    <NavDropdown.Item 
      href="https://telegram.com" 
      className={styles.dropdownItem}
    >
      Telegram
    </NavDropdown.Item>
    <NavDropdown.Item 
      href="https://coinmarketcap.com" 
      className={styles.dropdownItem}
    >
      CoinMarketCap
    </NavDropdown.Item>
    <NavDropdown.Item 
      href="https://coingecko.com" 
      className={styles.dropdownItem}
    >
      CoinGecko
    </NavDropdown.Item>
  </div>
</NavDropdown>

       </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

export default NavigationBar;


// Add bootstrap css