// Client side 
"use client";

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import styles from '../../../styles/NavigationBar.module.css';
import Image from 'next/image'; 
import images from '../../../assets/images';

// Custom Nav Item component

// const CustomDropdownTitle = () => {
//  return (
//  <div className={styles.customTitle}>
//     <span>Socials</span>
//   </div>
//  )
// }


// Navigation Bar

function NavigationBar() {
  return (  

// Create
   <header>
    {/* Banner Section */}
    <Alert className={`${styles.customAlertBackground} mb-0 text-center m-o rounded-0`}>
      <div className="d-flex justify-content-between align-items-center">
        {/* Logo on the far left */}
        <Image 
        src={images.cyclogo}
        alt="Logo Center"
        width={100}
        height={50}
        className={styles.logoCenter}
        />    
        {/* Centered Logo - Hidden on small and tablet screens  */}
      <div className="d-none d-lg-flex flex-grow-1 justify-content-center">  
      <Image
         src={images.coinmasterLogo}
         alt="Logo Left"
         width={50}
         height={50}
         className={styles.logoLeft}     
        />
      </div>
      </div>  
    </Alert>

  {/* Main Navigation */}
   <Navbar expand="md" className="mb-3" bg="dark" variant="dark">
    <Container fluid>
      <Navbar.Toggle aria-controls="basic-navbar-nav" bsPrefix="navbar-toggler" />
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
      <NavDropdown 
  title="Social"
  id="basic-nav-dropdown" 
  className={`${styles.customNavLink} ${styles.navLinkBold} ${styles.dropdownToggle}`} 
  style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
>
  <div className={`rounded-0 ${styles.dropdownItemsContainer}`}>
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
    </header>
  );
}

export default NavigationBar;


// Target the hamburger menu and change the color 
// Applied background color and variant color 