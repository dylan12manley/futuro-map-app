import React from "react";
import { Link } from "react-router-dom";

function Header(){

  const mainStyle = {
    backgroundColor: '#38171C',
    color: '#D2E8CC',
    height: 'calc(30px + 3vmin)',
    padding: '8px',
    paddingTop: '0px;',
    width: '100%',
    display: 'inline-flex',
  }

  const headerTitleStyle = {
    color: '#D2E8CC',
    display: 'inline-flex',
    height: 'calc(24px + 2vmin)',
    fontSize: 'calc(12px + 2vmin)',
    marginRight: '20vw',
    border: '3px double #D2E8CC',
    padding: '0.33vmin',
  }


  const navLinksStyle = {
    color: '#D2E8CC',
    display: 'inline-flex',
    marginTop: '1.2vmin',
  }

  const linkStyle = {
    marginLeft: '1.2vw',
    marginRight: '1.2vw',
    color: '#D2E8CC',
    fontSize: 'calc(6px + 2vmin)',
  }

  return (
    <div style={mainStyle}>
      <h4 style={headerTitleStyle}>Header</h4>
      <div style={navLinksStyle}>
        <p><Link to="/" style={linkStyle}>Home</Link></p>
        <p><Link to="/signin" style={linkStyle}>Sign In</Link></p>
      </div>
    </div>
  );
}

export default Header;
