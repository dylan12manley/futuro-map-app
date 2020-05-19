import React from "react";
import { Link } from "react-router-dom";
import futuro from '../../assets/images/BnRfuturo.png'
import { Row, Col, Collapse } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import '../../styles/Header.scss';

function Header(){
  
  const { Panel } = Collapse;

  const mainStyle = {
    position: 'fixed',
    zIndex: '1',
    top: '0',
    backgroundColor: 'black',
    color: '#D2E8CC',
    height: 'calc(60px + 2.5vmin)',
    paddingTop: '0px',
    width: '100%',
    display: 'inline-flex',
    textAlign: 'center',
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
    marginLeft: '1.5vmin',
    marginRight: '1.5vmin',
    color: '#F7F0ED',
    fontSize: 'calc(7px + 1.5vmin)',
    fontFamily: 'Bungee',
    fontWeight: '0'
  }

  const linkStyle2 = {
    color: '#F7F0ED',
    fontSize: 'calc(7px + 1vmin)',
    fontFamily: 'Bungee',
  }

  return (
    <>
    <div style={mainStyle}>
      <Row>
        <Col xs={0} sm={0} md={0} lg={0} xl={10} xxl={11}>
        <div style={navLinksStyle}>
          <Link to="/art" style={linkStyle}>Art</Link>
          <Link to="/fashion" style={linkStyle}>Fashion</Link>
          <Link to="/film" style={linkStyle}>Film</Link>
          <Link to="/people" style={linkStyle}>Humans</Link>
          <Link to="/people" style={linkStyle}>Studios</Link>
        </div>
        </Col>
        <Col md={8} lg={4} xxl={2}>
        </Col>
        <Col xl={0} xxl={0}></Col>
        <Col xs={0} sm={0} md={0} lg={0} xl={10}xxl={11}>
          <div style={navLinksStyle2}>
            <Link to="/sound" style={linkStyle}>Sound</Link>
            <Link to="/art" style={linkStyle}>Adventures</Link>
            <Link to="/fashion" style={linkStyle}>Rad Places</Link>
            <Link to="/film" style={linkStyle}>Store</Link>
          </div>
        </Col>
      </Row>
      <Row style={{textAlign: 'center'}}>
        <Col xs={12} sm={12} md={12} lg={12} xl={24}>
          <Link to="/" > 
            <img src={futuro} className='logo' alt='Futuro'></img>
          </Link>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={0} xxl={0}
          className='collapse-col'>
          <Collapse 
            showArrow={false} 
            bordered={false}
            className='collapse'
            expandIcon={({ isActive }) => <MenuOutlined style={{fontSize: '24px', margin: '0, auto', backgroundColor: '#F7F0ED'}}rotate={isActive ? 90 : 360} />}
            >
            <Panel 
              key="1" 
              className="collapse-custom-panel">
              <Link to="/art" style={linkStyle2}>Art Now</Link><br/>
              <Link to="/fashion" style={linkStyle2}>Fashion</Link><br/>
              <Link to="/film" style={linkStyle2}>Film</Link><br/>
              <Link to="/people" style={linkStyle2}>Humans</Link><br/>
              <Link to="/people" style={linkStyle2}>Studios</Link><br/>
              <Link to="/sound" style={linkStyle2}>Sound</Link><br/>
              <Link to="/art" style={linkStyle2}>Adventures</Link><br/>
              <Link to="/fashion" style={linkStyle2}>Rad Places</Link><br/>
              <Link to="/film" style={linkStyle2}>Store</Link><br/>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </div>
    </>
  );
}

export default Header;
