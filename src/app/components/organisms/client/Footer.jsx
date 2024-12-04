import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../../styles/Footer.module.css';
import images from '../../../assets/images';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={`${styles.footer} text-light`}>
      <Container
        fluid
        className={`d-flex flex-column justify-content-between ${styles.footerContainer}`}
      >
        {/* Icons Section */}
        <Row className="justify-content-center mb-3 gap-4 d-flex  align-items-center">
          {/* Twitter Logo */}

          {/* Target this element in html  */}
          <Col xs="auto">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <Image
                width={70}
                height={70}
                src={images.twitter}
                alt="Twitter"
              />
            </a>
          </Col>
          {/* Telegram Logo */}
          <Col xs="auto">
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <Image
                width={70}
                height={70}
                src={images.telegramFooter}
                alt="Telegram"
              />
            </a>
          </Col>
          {/* CoinGecko Logo */}
          <Col xs="auto">
            <a
              href="https://coingecko.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <Image
                width={70}
                height={70}
                src={images.coingeckoFooter}
                alt="CoinGecko"
              />
            </a>
          </Col>
          {/* CoinMarketCap Logo */}
          <Col xs="auto">
            <a
              href="https://coinmarketcap.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <Image
                width={70}
                height={70}
                src={images.coinmarketcapFooter}
                alt="CoinMarketCap"
              />
            </a>
          </Col>
        </Row>

        {/* Navigation Links */}
        <Row className={`justify-content-center ${styles.navLinks} mb-3 gap-4`}>
          <Col xs="auto">
            <a href="/home" className={styles.navLink}>
              Home
            </a>
          </Col>

          <Col xs="auto">
            <a href="/buy-now" className={styles.navLink}>
              Buy Now
            </a>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className={`${styles.copyrightSection} justify-content-center`}>
          <Col xs="auto">
            <p className={`m-0 ${styles.copyrightSection} px-4 py-4`}>
              ©2024. SyncSphere Labs. All rights reserved. CoinMaster.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
