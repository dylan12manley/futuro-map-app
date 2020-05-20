import React from "react"
import { Link } from "react-router-dom"
import futuro from '../../assets/images/logo-black-sm.jpg'
import { Row, Col, Collapse } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import '../../styles/Header.scss'

function Header(){
  
  const { Panel } = Collapse

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

  const linkStyle2 = {
    color: 'white',
    fontSize: 'calc(7px + 1vmin)',
    fontFamily: 'Bungee',
  }

  return (
    <>
    <div style={mainStyle}>
      <Row style={{textAlign: 'center'}}>
        <Col xs={12} sm={12} md={12} lg={12} xl={24}>
          <Link to="/" > 
            <img src={futuro} className='logo' alt='Futuro'></img>
          </Link>
        </Col>
        <Col  lg={8} xl={8} 
          className='collapse-col'>
          <Collapse 
            showArrow={false} 
            bordered={false}
            className='collapse'
            expandIcon={({ isActive }) => <MenuOutlined 
                                            style={{fontSize: 'calc(12px + 2vmin)', 
                                              margin: '0, auto', 
                                              backgroundColor: 'white'}} 
                                            rotate={isActive ? 90 : 360} 
                                          />}
            >
            <Panel 
              // key="1" 
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
