import React from "react";
import { Link } from "react-router-dom";
import futuro from '../../assets/images/BnRfuturo.png'

function Header(){

  const mainStyle = {
    position: 'fixed',
    zIndex: '1',
    top: '0',
    backgroundColor: 'black',
    color: '#D2E8CC',
    height: 'calc(40px + 2.5vmin)',
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
    marginTop: '3px' 
  }

  const navLinksStyle = {
    color: '#F7F0ED',
    display: 'inline-flex',
    marginTop: '1.5vmin',
    marginLeft: '5vmin',
  }

  const linkStyle = {
    marginLeft: '1.3vmin',
    marginRight: '1.3vmin',
    color: '#F7F0ED',
    fontSize: 'calc(4px + 1.5vmin)',
    fontFamily: 'Bungee',
    fontWeight: '0'
  }

  return (
    <>
    <div style={mainStyle}>
      <Link to="/" 
      > 
        <img src={futuro} 
          style={futuroTitle} 
          alt='Futuro'>
        </img>
      </Link>
     
      <div style={navLinksStyle}>
        <Link to="/art" style={linkStyle}>Art Now</Link>
        <Link to="/fashion" style={linkStyle}>Fashion</Link>
        <Link to="/film" style={linkStyle}>Film</Link>
        <Link to="/people" style={linkStyle}>Humans</Link>
        <Link to="/people" style={linkStyle}>Studios</Link>
        <Link to="/sound" style={linkStyle}>Sound</Link>
        <Link to="/art" style={linkStyle}>Adventures</Link>
        <Link to="/fashion" style={linkStyle}>Rad Places</Link>
        <Link to="/film" style={linkStyle}>Store</Link>
      </div>
    </div>
    </>
  );
}

export default Header;
