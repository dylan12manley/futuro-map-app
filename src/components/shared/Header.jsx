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
  }

  const futuroTitle = {
    height: 'calc(40px + 5vmin)',
    backgroundColor: 'black',
    borderRadius: '10px',
    padding: '3px',
    marginTop: '3px' 
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
      <Link to="/" 
      > 
        <img src={futuro} 
          style={futuroTitle} 
          alt='Futuro'>
        </img>
      </Link>
     
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
