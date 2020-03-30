import React from "react";
import { Link } from "react-router-dom";
import f from './../assets/images/FBnW.png'
import m from './../assets/images/MBnW.png'

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

  const imgStyle = {
    backgroundColor: '#1C0B0D',
    color: '#F7F3F2',
    display: 'inline-flex',
    marginRight: '2vw',
    marginTop: '5px',
    height: 'calc(20px + 1.8vmin)',
    border: '3px double #CCA7A3',
    padding: '0.33vmin',
    paddingTop: '0px',
    borderRadius:  '8px',
    fontSize: 'calc(5.6px + 1.75vmin)',
    filter: 'brightness(2)',
  }

  const imagesStyle = {
    backgroundColor: '#1C0B0D',
    display: 'inline-flex',
    marginRight: '1.2vw',
    border: '3px double #CCA7A3',
    height: '20px',
    border: '1px single #CCA7A3',
    filter: 'brightness(1.5)',
  }


  return (
    <>
    <div style={mainStyle}>
        <div style={imagesStyle}>
          <img src={f} style={imgStyle}></img><img src={m} style={imgStyle}></img>
        </div>  
    </div>
    </>
  );
}

export default Footer;
