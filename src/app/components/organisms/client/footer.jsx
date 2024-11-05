import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import images from "../../../assets/images";
// import styles from '../../../styles/Footer.module.css';


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      {/*  */}
      <Container>
          <Row className="justify-content-center mc-3">
            {/* Telegram Logo 1 */}
          <Col xs="auto">
             <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <img src={images.telegramFooter} alt="Telegram Logo" className="social-icon"/>
             </a>          
            </Col>
          {/*X  Logo 2 */}
          <Col xs="auto">
             <a href="https://example.com" target="_blank" rel="noopener noreferrer">
             <img src={images.xFooter} alt="X Logo" className="social-icon" />
             </a>          
            </Col>
          {/* Logo 3 */}
          <Col xs="auto">
             <a href="https://example.com" target="_blank" rel="noopener noreferrer">
             <img src={images.coinmarketcapFooter} alt="Coinmarketcap Logo" className="social-icon"/>
             </a>          
            </Col>
          {/* Logo 4 */}
          <Col xs="auto">
             <a href="https://example.com" target="_blank" rel="noopener noreferrer">
             <img src={images.coingeckoFooter} alt="CoinGecko Logo" className="social-icon"/>
             </a>          
            </Col>
          </Row>

        <Row className="justify-content-center">
          {/* Navigation Links */}
          <Nav className="footer-nav">
            {/* Link 1 */}
            <Nav.Item>
              <Nav.Link href="/home">
                Home
              </Nav.Link>
            </Nav.Item>
            {/* Link 2 */}
            <Nav.Item>
              <Nav.Link href="/how-to-buy">
                How To Buy
              </Nav.Link>
            </Nav.Item>
            {/* Link 3 */}
            <Nav.Item>
              <Nav.Link href="/tokenomics">
                Tokenomics
              </Nav.Link>
            </Nav.Item>
            {/* Link 4 */}
            <Nav.Item>
              <Nav.Link href="/buy-now">
                Buy Now
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
      </Container>   
    </footer>
  )
}

export default Footer