import React from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
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
        <Row className="justify-content-center mb-3 gap- d-flex  align-items-center">
          {/* Twitter Logo */}
          {/* Target this element in html  */}
          <Col xs="auto">
            <a
              href="https://x.com/cyrocoinsol?s=11"
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
              href="https://t.me/cyrocoin"
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
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-coingecko">Coming Soon</Tooltip>}
            >
              <span className={styles.iconLink}>
                <Image
                  width={70}
                  height={70}
                  src={images.coingeckoFooter}
                  alt="CoinGecko"
                />
              </span>
            </OverlayTrigger>
          </Col>
          {/* CoinMarketCap Logo */}
          <Col xs="auto">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="tooltip-coinmarketcap">Coming Soon</Tooltip>
              }
            >
              <span className={styles.iconLink}>
                <Image
                  width={70}
                  height={70}
                  src={images.coinmarketcapFooter}
                  alt="CoinMarketCap"
                />
              </span>
            </OverlayTrigger>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className={`${styles.copyrightSection} justify-content-center`}>
          <Col xs="auto">
            <p className={`m-0 ${styles.copyrightSection} px-4 py-4`}>
              ©2024. SyncSphere Labs. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
