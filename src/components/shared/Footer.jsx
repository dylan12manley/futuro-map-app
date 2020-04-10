import React from "react";
import { Link } from "react-router-dom";

function Footer(){

  const mainStyle = {
    textAlign: 'right',
    position: 'fixed',
    zIndex: '1',
    bottom: '0',
    backgroundColor: '#1C0B0D',
    color: '#D2E8CC',
    height: 'calc(26px + 2.5vmin)',
    paddingTop: '0px',
    width: '100%',
    filter: 'grayscale(.75)',
  }

  const imagesStyle = {
    backgroundColor: '#1C0B0D',
    display: 'inline-flex',
    marginRight: '1.2vw',
    height: '20px',
  }


  return (
    <>
    <div style={mainStyle}>
        <div style={imagesStyle}>
          <p>Contact us: <br></br>
          <Link src='media@futuromagazine.com'>media@futuromagazine.com</Link></p>
        </div>  
    </div>
    </>
  );
}

export default Footer;
