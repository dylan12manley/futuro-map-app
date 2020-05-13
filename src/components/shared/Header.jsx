import React from "react";
import { Link } from "react-router-dom";
import futuro from '../../assets/images/BnRfuturo.png'
import { Row, Col } from 'antd';

function Header(){

  const mainStyle = {
    position: 'fixed',
    zIndex: '1',
    top: '0',
    backgroundColor: 'black',
    color: '#D2E8CC',
    height: 'calc(70px + 2.5vmin)',
    paddingTop: '0px',
    width: '100%',
    display: 'inline-flex',
    textAlign: 'center',
  }

  const futuroTitle = {
    height: 'calc(40px + 5vmin)',
    backgroundColor: 'black',
    borderRadius: '10px',
    padding: '3px',
    marginTop: '40px', 
    marginLeft: '2.5vmin',
  }

  const navLinksStyle = {
    color: '#F7F0ED',
    marginTop: '1.5vmin',
    marginLeft: '5vmin',
  }

  const navLinksStyle2 = {
    color: '#F7F0ED',
    marginTop: '1.5vmin',
    marginRight: '5vmin',
    position: 'fixed',
    right: '0',
    }
 

  const linkStyle = {
    marginLeft: '1.3vmin',
    marginRight: '1.3vmin',
    color: '#F7F0ED',
    fontSize: 'calc(7px + 1.5vmin)',
    fontFamily: 'Bungee',
    fontWeight: '0'
  }

  return (
    <>
    <div style={mainStyle}>
      <Row>
        <Col md={8} lg={10} xxl={11}>
        <div style={navLinksStyle}>
          <Link to="/art" style={linkStyle}>Art</Link>
          <Link to="/fashion" style={linkStyle}>Fashion</Link>
          <Link to="/film" style={linkStyle}>Film</Link>
          <Link to="/people" style={linkStyle}>Humans</Link>
          <Link to="/people" style={linkStyle}>Studios</Link>
          <Link to="/sound" style={linkStyle}>Sound</Link>
        </div>
        </Col>
        <Col md={8} lg={4} xxl={2}>
        {/* <Link to="/" > 
          <img src={futuro} style={futuroTitle} alt='Futuro'></img>
        </Link> */}
        </Col>
        <Col xxl={1} xxxl={1}></Col>
        <Col md={8} lg={10} xxl={1}>
        <div style={navLinksStyle2}>
          <Link to="/people" style={linkStyle}>People</Link>
          <Link to="/art" style={linkStyle}>Adventures</Link>
          <Link to="/fashion" style={linkStyle}>Places</Link>
          <Link to="/film" style={linkStyle}>Store</Link>
        </div>
        </Col>
      </Row>
      <Row style={{textAlign: 'center'}}>
        <Col></Col>
        <Col>
          <Link to="/" > 
            <img src={futuro} style={futuroTitle} alt='Futuro'></img>
          </Link>
        </Col>
      </Row>
    </div>
    </>
  );
}

export default Header;
