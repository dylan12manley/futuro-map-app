import React from 'react';
import { Link } from 'react-router-dom';


import rings1 from './../assets/images/rings1BnW.png'
import rings2 from './../assets/images/rings2.png'
import mag from './../assets/images/MagazineBnW.png'
import futuro from './../assets/images/futuroBnW.png'
import fm from './../assets/images/FMBnW.png'


function LandingPage(){
  const styledLanding = {
    backgroundColor: '#183023',
    color: '#8E545E',
    padding: '50px',
    height: '100vh',
    fontFamily: 'Black Ops One',
    textAlign: 'center',
    filter: 'grayscale(.75)',
  }


  const styledMagImgs = {
    height: '24vmin',
    width: '33vmin',
  }


  return (
    <div style={styledLanding}>
      <div style={{paddingTop: '18vh',
                   filter: 'grayscale(.25)',}}>
        <div style={{height: '20vh'}}>
          <img src={futuro} style={{width: '45%', height: '75%', filter: 'brightness(3)'}} alt='Futuro'></img>
        </div>
        <div>
          <img src={rings1} style={{height: '12vh'}} alt='rings'></img>
          <Link to="/home" style={{ textDecoration: 'none', color: '#D6684D', filter: 'brightness(2)'}}><img src={fm} style={{height: '10vh'}} alt='FM'></img> </Link>
          <img src={rings1} style={{transform:'rotate(180deg)', height: '12vh'}} alt='rings'></img>
        </div>
      </div>


      <div style={{color: '#D6684D', filter: 'grayscale(.5)'}}>
        <img src={mag} style={{ width: '50%', filter: 'brightness(3)' }} alt='Mag'></img>
      </div>
    </div>
  );
}

export default LandingPage;
