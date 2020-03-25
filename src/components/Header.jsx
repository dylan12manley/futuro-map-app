import React from "react";
import { Link } from "react-router-dom";

function Header(){

  const mainStyle = {
    backgroundColor: '#1C0B0D',
    color: '#D2E8CC',
    height: 'calc(40px + 2.5vmin)',
    padding: '8px',
    paddingTop: '0px',
    width: '100%',
    display: 'inline-flex',
  }

  const headerTitleStyle = {
    backgroundColor: '#1C0B0D',
    color: '#DDF4D7',
    display: 'inline-flex',
    height: 'calc(16px + 1.8vmin)',
    fontSize: 'calc(12px + 1.8vmin)',
    marginRight: '15vw',
    border: '3px double #CCA7A3',
    padding: '0.33vmin',
    borderRadius:  '8px',
  }


  const navLinksStyle = {
    color: '#D2E8CC',
    display: 'inline-flex',
    marginTop: '1.2vmin',
  }

  const linkStyle = {
    display: 'inline-flex',
    marginLeft: '1.2vw',
    marginRight: '1.2vw',
    color: '#D2E8CC',
    fontSize: 'calc(6px + 1.75vmin)',
  }

  return (
    <div style={mainStyle}>
      <Link to="/" style={linkStyle}><h4 style={headerTitleStyle}>Futuro Magazine</h4></Link>
      <div style={navLinksStyle}>
        <Link to="/art" style={linkStyle}>Art</Link>
        <Link to="/fashion" style={linkStyle}>Fashion</Link>
        <Link to="/sound" style={linkStyle}>Sound</Link>
        <Link to="/film" style={linkStyle}>Film</Link>
      </div>
    </div>
  );
}

export default Header;
