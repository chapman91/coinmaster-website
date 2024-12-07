// Client side
'use client';

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { WalletConnectButton } from '../../componentsBarrel';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import styles from '../../../styles/NavigationBar.module.css';
import Image from 'next/image';
import images from '../../../assets/images';

function NavigationBar() {
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
            ></Nav>
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
