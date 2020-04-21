import React from "react";
import { Link } from "react-router-dom";
import futuro from '../../assets/images/greenfuturo.png'

function Header(){

  const mainStyle = {
    position: 'fixed',
    zIndex: '1',
    top: '0',
    backgroundColor: '#1C0B0D',
    color: '#D2E8CC',
    filter: 'grayscale(.75)',
    height: 'calc(40px + 2.5vmin)',
    paddingTop: '0px',
    width: '100%',
    display: 'inline-flex',
  }

  const headerTitleStyle = {
    position: 'fixed',
    left: '0',
    top: '0',
    backgroundColor: '#1C0B0D',
    color: '#F7F3F2',
    display: 'inline-flex',
    marginLeft: '1.2vw',
    marginRight: '1.2vw',
    marginTop: '30px',
    height: 'calc(26px + 1.8vmin)',
    fontSize: 'calc(12px + 1.8vmin)',
    border: '3px double #CCA7A3',
    padding: '0.33vmin',
    paddingTop: '0px',
    borderRadius:  '8px',
    fontFamily: 'Bungee',
    fontWeight: '100',
    textShadow: '1px 1px 1px #1C0B0D',
  }


  const navLinksStyle = {
    position: 'fixed',
    right: '0',
    color: '#F7F0ED',
    display: 'inline-flex',
    marginTop: '1.2vmin',
  }

  const linkStyle = {
    marginLeft: '1.2vw',
    marginRight: '1.2vw',
    color: '#F7F0ED',
    textDecoration: 'none',
    fontSize: 'calc(5.6px + 1.75vmin)',
    border: '1px solid #B7B4B3'
  }

  const linkStyle2 = {
    marginLeft: '1.2vw',
    marginRight: '1.2vw',
    color: '#F7F0ED',
    textDecoration: 'none',
    fontSize: 'calc(6.5px + 1.75vmin)',
  }

  const linkStyle2b = {
    marginLeft: '1.2vw',
    marginRight: '1.2vw',
    color: '#F7F0ED',
    textDecoration: 'overline',
    fontSize: 'calc(6px + 1.75vmin)',
  }


  return (
    <>
    <div style={mainStyle}>
      <Link to="/" style={linkStyle}> <img src={futuro} style={{height: 'calc(10px + 18vmin)', padding: '1vmin', margin: '0', border: '3px solid black', borderRadius: '10px'}} alt='Futuro'></img></Link>
     
      <div style={navLinksStyle}>
        <Link to="/art" style={linkStyle2b}>Art</Link>
        <Link to="/fashion" style={linkStyle2}>Fashion</Link>
        <Link to="/sound" style={linkStyle}>Sound</Link>
        <Link to="/film" style={linkStyle2b}>Film</Link>
        <Link to="/people" style={linkStyle2}>People</Link>
      </div>
    </div>
    </>
  );
}

export default Header;
