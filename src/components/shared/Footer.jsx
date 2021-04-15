import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Footer.scss'

function Footer(){

  return (
    <>
      <div className='footer'>
        <p style={{marginRight: '1.2vw'}}>Contact us: <br className='break'></br>
        <Link src='media@futuromagazine.com'>media@futuromagazine.com</Link></p>    
      </div>
    </>
  );
}

export default Footer;
