import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../../styles/Footer.module.css'; // Assuming you have a CSS module

const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-dark text-light`}>
      <Container fluid className="py-4">
        {/* Section with Navigation Links */}
        <Row className="justify-content-center mb-3">
          <Col xs="auto">
            <a href="/home" className={styles.iconLink}>
              <img src="/path/to/home-icon.png" alt="Home" />
              <span>Home</span>
            </a>
          </Col>
          <Col xs="auto">
            <a href="/how-to-buy" className={styles.iconLink}>
              <img src="/path/to/how-to-buy-icon.png" alt="How To Buy" />
              <span>How To Buy</span>
            </a>
          </Col>
          <Col xs="auto">
            <a href="/tokenomics" className={styles.iconLink}>
              <img src="/path/to/tokenomics-icon.png" alt="Tokenomics" />
              <span>Tokenomics</span>
            </a>
          </Col>
          <Col xs="auto">
            <a href="/blog" className={styles.iconLink}>
              <img src="/path/to/blog-icon.png" alt="Blog" />
              <span>Blog</span>
            </a>
          </Col>
          <Col xs="auto">
            <a href="/buy-now" className={styles.iconLink}>
              <img src="/path/to/buy-now-icon.png" alt="Buy Now" />
              <span>Buy Now</span>
            </a>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="justify-content-center">
          <Col xs="auto">
            <p className="m-0">
              ©2024. Designed by TSS Media
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
