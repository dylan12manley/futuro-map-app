import React from 'react'
import { Link } from 'react-router-dom'
import logoBlack from '../../assets/images/logo-black.jpg'
import smLogo from '../../assets/images/logo-black-sm.jpg'
import Iframe from 'react-iframe'

function Landing(){

  const bigLogoStz = {
    height: 'calc(50px + 36vmin)',
    display: 'none',
  }
  
  const logoStz = {
    height: '70vmin',
  }

  function mouseLogo(e) {
    e.target.style.transform = 'rotate(-.12deg)'
    e.target.style.filter= 'brightness(1.2)'
    e.target.style.height= '72vmin'
  }

  function clickLogo(e) {
    e.target.style.transform = 'rotate(-2deg)'
    e.target.style.height= '72vmin'
  }

  return (
    <div style={{
      textAlign: 'center', 
      backgroundColor: 'black', 
      height: '100vh'}}>
      <div style={{paddingTop: '10vh'}} >
         <Link to="/home">
            <img style={logoStz} 
              src={logoBlack} 
              alt='FUTURO' 
              onMouseOver={mouseLogo}
              onClick={clickLogo}
              >
            </img>
          </Link>
      </div>
      <div>
      <Iframe url='https://www.youtube.com/embed/qYG0tKyz0lo?autoplay=1'
        display='none'
        allow='autoplay'/>
      </div>
    </div>
  );
}

export default Landing;
