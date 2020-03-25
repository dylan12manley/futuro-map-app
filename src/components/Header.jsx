import React from "react";
import { Link } from "react-router-dom";

function Header(){

  const mainStyle = {
    backgroundColor: '#38171C',
    color: '#D2E8CC',
    height: '42px',
    padding: '8px',
    paddingTop: '0px;',
    width: '100%',
    display: 'inline-flex',
  }

  const navLinksStyle = {
    color: '#D2E8CC',
    display: 'inline-flex',
    marginLeft: '45vw',
  }

  const linkStyle = {
    marginLeft: '1.2vw',
    marginRight: '1.2vw',
  }

  return (
    <div style={mainStyle}>
      <h4>Header</h4>
      <div style={navLinksStyle}>
        <p style={linkStyle}><Link to="/">Home</Link></p>
        <p style={linkStyle}><Link to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
}

export default Header;
