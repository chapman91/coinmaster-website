// Client side
'use client';

import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { WalletConnectButton } from '../../componentsBarrel';
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

  // Style function for nav links
  const getLinkColor = (route) => ({
    color: currentRoute === route ? 'yellow' : 'white', // Yellow for active link, white for others
    fontWeight: currentRoute === route ? 'bold' : 'normal', // Bold for active link
    backgroundColor: 'transparent', // No background for links
    border: currentRoute === route ? '2px solid yellow' : 'none', // Add a yellow border for active links if needed
    borderRadius: '4px', // Optional for a slight rounded highlight
    padding: '5px 10px',
    transition: 'color 0.3s, border 0.3s', // Smooth transition for color and border changes
  });

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
    backgroundColor:
      currentRoute === route || hoveredItem === item ? 'white' : 'transparent',
    borderRadius: '0',
    border: 'none',
    transition: 'color 0.3s',
  });

  return (
    <header className="header">
      {/* Banner Section */}
      <Alert
        className={`${styles.customAlertBackground} mb-0 text-center m-o rounded-0`}
      >
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
          {/* <div>
            <WalletConnectButton />
          </div> */}
        </div>
      </Alert>

      {/* Main Navigation */}
      <Navbar expand="md" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            bsPrefix="navbar-toggler"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className={`mx-auto justify-content-center ${styles.navContainer}`}
              justify
              variant="tabs"
              defaultActiveKey="/home"
            >
              {/* <Nav.Item className={styles.navItem}>
                <Nav.Link
                  href="/home"
                  className={`${styles.customNavLink} ${styles.navLinkBold} `}
                  active={currentRoute === '/home'}
                  style={{
                    ...getLinkStyle('/home', 'home'),
                  }}
                  onMouseEnter={() => handleMouseEnter('home')}
                  onMouseLeave={handleMouseLeave}
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.navItem}>
                <Nav.Link
                  href="./buy-now"
                  eventKey="link-3"
                  className={`${styles.customNavLink} ${styles.navLinkBold}`}
                  active={currentRoute === '/buy-now'}
                  onMouseEnter={() => handleMouseEnter('buy-now')}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    ...getLinkStyle('/buy-now', 'buy-now'),
                  }}
                >
                  Buy Now
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Yellow Strip at the Bottom of Navigation Bar */}
      <div className={styles.yellowStripContainer}>
        <div className={styles.gradient}></div>
        <Image
          width={1280}
          height={21}
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
