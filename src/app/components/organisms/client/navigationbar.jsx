// Client side 
"use client";

import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import styles from '../../../styles/NavigationBar.module.css';
import Image from 'next/image'; 
import images from '../../../assets/images';
import { useRouter } from 'next/navigation';




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

  // hoveredItem is managed using useState to track which nav item is hovered, changing its color conditionally
  // state variable - hoveredItem - stores the currently hovered item 
  // setHoveredItem is a function used to update the value of `hoveredItem`. 
  const [hoveredItem, setHoveredItem] = useState(null);

  // Function triggered when the user hovers over a specific item (like a naviagtion link)
  // `item` is taken as an argument, representing the item the user is hovering over.
  // Sets `hoveredItem` to the currently hovered item.
  const handleMouseEnter = (item) => {
    setHoveredItem(item); // Set the hovered item
  };


  // `handleMouseLeave` is a function triggered when the user's mouse leaves item.
  // `setHoveredItem(null)` resets hoveredItem back to null, meaning no item is currently hovered. 
  const handleMouseLeave = () => {
    setHoveredItem(null); // Reset hovered item on mouse item
  };


  const router = useRouter();

  const currentRoute = router.pathname; 


  return (  

// Create
   <header>
    {/* Banner Section */}
    <Alert className={`${styles.customAlertBackground} mb-0 text-center m-o rounded-0`}>
      <div className="d-flex justify-content-between align-items-center">
        {/* Logo on the far left */}
        <Image 
        src={images.cyclogo}
        href="/home"
        alt="Logo Center"
        width={100}
        height={50}
        className={styles.logoCenter}
        />    
        {/* Centered Logo - Hidden on small and tablet screens  */}
      <div className="d-none d-lg-flex flex-grow-1 justify-content-center">  
      <Image
         src={images.coinmasterLogo}
         href="/home"
         alt="Logo Left"
         width={45}
         height={45}
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
        <Nav.Link href="/home" className={`${styles.customNavLink} ${styles.navLinkBold} `} style={{
                            borderRadius: '0',
                            border: 'none',
                            color: hoveredItem === '/home' ? 'blue' : (hoveredItem === 'home' ? 'blue' : 'black'),
                            transition: 'color 0.3s',
                        }}
                        onMouseEnter={() => handleMouseEnter('link')}
                        onMouseLeave={handleMouseLeave}>Home</Nav.Link>
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