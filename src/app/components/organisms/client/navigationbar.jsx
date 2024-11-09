// Client side 
"use client";

import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { WalletConnectButton } from '../../componentsBarrel';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import styles from '../../../styles/NavigationBar.module.css';
import Image from 'next/image'; 
import images from '../../../assets/images';
import { useRouter } from 'next/navigation';




function NavigationBar() {

 
  const [hoveredItem, setHoveredItem] = useState(null);

 
  const handleMouseEnter = (item) => {
    setHoveredItem(item); 
  };


  
  const handleMouseLeave = () => {
    setHoveredItem(null); 
  };


  const router = useRouter();

  const currentRoute = router.pathname; 


  // Instead od checking `currentRoute` for each link, consider using the active prop for `Nav.Link` 
  // Refactor the `Nav.Link` componenets to use the `active` prop based on your route condition
  const getLinkStyle = (route, item) => ({

    // currentRoute === route: This checks if the `currentRoute` (the current URL path that the user is on) is equal to route (the specific path for that navigation link).
    // hoveredItem === item: This checks if hoveredItem (the item currently being hovered over by the mouse) is equal to item (the specific identifier for that navigation link).
    // Logical OR Operator `||`: if either of conditions on the left or right evaluates to true, the overall expression will be true.
    // Ternary Operator: `condition ? valueIfTrue : valueIfFalse`
    // `===` is a stricy equality operator: use to compare two values to determine if they are equal in both value and type
    color: currentRoute === route || hoveredItem === item ? 'black' : 'white',
    backgroundColor: currentRoute === route || hoveredItem === item ? 'white' : 'transparent' ,
    borderRadius: '0', 
    border: 'none',
    transition: 'color 0.3s',
  });
  return (  
   <header className="header">
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
      {/* Wallet Connect Button */}
      <div>
      <WalletConnectButton /> 
      </div>
      </div>  

    </Alert>

  {/* Main Navigation */}
   <Navbar expand="md" bg="dark" variant="dark">
    <Container fluid>
      <Navbar.Toggle aria-controls="basic-navbar-nav" bsPrefix="navbar-toggler" />
      <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className={`mx-auto justify-content-center ${styles.navContainer}`} justify variant="tabs" defaultActiveKey="/home">
       <Nav.Item className={styles.navItem}>
        <Nav.Link href="/home" className={`${styles.customNavLink} ${styles.navLinkBold} `}
        active={currentRoute === '/home'}
        style={
                           getLinkStyle('/home', 'home')
                        }
                        onMouseEnter={() => handleMouseEnter('home')}
                        onMouseLeave={handleMouseLeave}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.navItem}>
        <Nav.Link href="/how-to-buy" className={`${styles.customNavLink} ${styles.navLinkBold}`} 
        active={currentRoute === '/how-to-buy'}
        onMouseEnter={() => handleMouseEnter('how-to-buy')}
                        onMouseLeave={handleMouseLeave} style={getLinkStyle('/how-to-buy', 'how-to-buy')}>How to Buy</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.navItem}>
        <Nav.Link href="/" eventKey="link-1" className={`${styles.customNavLink} ${styles.navLinkBold}`} 
                        active={currentRoute === '/tokenomics'}
                        onMouseEnter={() => handleMouseEnter('tokenomics')}
                        onMouseLeave={handleMouseLeave} 
                        style={getLinkStyle('/tokenomics', 'tokenomics')}>Tokenomics</Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.navItem}>
        <Nav.Link href="./buy-now" eventKey="link-3" className={`${styles.customNavLink} ${styles.navLinkBold}`}  
                        active={currentRoute === '/buy-now'}
                        onMouseEnter={() => handleMouseEnter('buy-now')}
                        onMouseLeave={handleMouseLeave} 
                        style={getLinkStyle('/buy-now', 'buy-now')}>
          Buy Now
        </Nav.Link>
      </Nav.Item>
      <NavDropdown 
  title="Social"
  id="basic-nav-dropdown" 
  className={` ${styles.customNavLink} ${styles.navLinkBold} ${styles.dropdownToggle}`} 
  style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
 
>
  <div className={`rounded-0 ${styles.dropdownItemsContainer}`}>
    <NavDropdown.Item 
      href="https://X.com" 
      className={styles.dropdownItem}
    >
      <Image
       src={images.xLogo}
       alt="X icon"
       width={16}
       height={16}
       className={styles.iconLeft}   
      />
      X 
    </NavDropdown.Item>
    <NavDropdown.Item 
      href="https://telegram.com" 
      className={styles.dropdownItem}
    >
       <Image
       src={images.telegramLogo}
       alt="Telegram icon"
       width={16}
       height={16}
       className={styles.iconLeft}   
      />
      Telegram
    </NavDropdown.Item>
    <NavDropdown.Item 
      href="https://coinmarketcap.com" 
      className={styles.dropdownItem}
    >
      <Image
       src={images.coinMarketCap}
       alt="coinMarketCap icon"
       width={16}
       height={16}
       className={styles.iconLeft}   
      />
      CoinMarketCap
    </NavDropdown.Item>
    <NavDropdown.Item 
      href="https://coingecko.com" 
      className={styles.dropdownItem}
    >
      <Image
       src={images.coinGecko}
       alt="coinGecko icon"
       width={16}
       height={16}
       className={styles.iconLeft}   
      />
      CoinGecko
      
    </NavDropdown.Item>
  </div>
      </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    {/* Yellow Strip at the Bottom of Navigation Bar */}
    <div className={styles.yellowStripContainer}>
    <div className={styles.gradient}></div>  
    <img
    src={images.yellowStrip}
    alt="Yellow Strip"
    className={styles.yellowStrip}
    />  
    </div>
     
    </header>
  );
}

export default NavigationBar;



// Adjust the styling and positioning of the `Image` component




/**  Each Nav.Link compares currentRoute with its href to determine if it should be styled as active. */ 