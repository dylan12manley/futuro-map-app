import React from 'react';
import { Link } from 'react-router-dom';
import F1 from './../assets/images/landing/F1.png'
import A1 from './../assets/images/landing/A1.png'
import E1 from './../assets/images/landing/E1.png'
import G1 from './../assets/images/landing/G1.png'
import I1 from './../assets/images/landing/I1.png'
import M1 from './../assets/images/landing/M1.png'
import N1 from './../assets/images/landing/N1.png'
import O1 from './../assets/images/landing/O1.png'
import R1 from './../assets/images/landing/R1.png'
import T1 from './../assets/images/landing/T1.png'
import U1 from './../assets/images/landing/u1.png'
import Z1 from './../assets/images/landing/Z1.png'
import futuro1 from './../assets/images/landing/futuro1.png'
import futuro2 from './../assets/images/landing/futuro2.png'
import Magazine1 from './../assets/images/landing/Magazine1.png'
import Magazine2 from './../assets/images/landing/Magazine2.png'

import rings1 from './../assets/images/rings1BnW.png'
import rings2 from './../assets/images/rings2.png'
import mag from './../assets/images/MagazineBnW.png'
import futuro from './../assets/images/futuroBnW.png'
import fm from './../assets/images/FMBnW.png'
import f from './../assets/images/FBnW.png'
import m from './../assets/images/MBnW.png'

function LandingPage(){
  const styledLanding = {
    backgroundColor: '#183023',
    color: '#8E545E',
    padding: '50px',
    height: '100vh',
    fontFamily: 'Black Ops One',
    textAlign: 'center',
  }
  const styledLetterImgs = {
    height: '6vmin',
    width: '6vmin',
    filter: 'sepia(80%)',
  }

  const styledLetterImgs2 = {
    height: 'calc(18vmin)',
    width: 'calc(8px+13vmin)',
    paddingBottom: '3vmin',
    paddingLeft: '12vmin',
  }

  const styledMagImgs = {
    height: '24vmin',
    width: '33vmin',
  }


  return (
    <div style={styledLanding}>
      <div style={{height: '20vh'}}>
        <img src={futuro} style={{width: '35%', height: '80%'}} alt='Futuro'></img>
      </div>
      <div>
        <img src={rings1} style={{height: '12vh'}} alt='rings'></img>
        <Link to="/home" style={{ textDecoration: 'none', color: '#D6684D'}}><img src={fm} style={{height: '8vh'}} alt='FM'></img> </Link>
        <img src={rings1} style={{transform:'rotate(180deg)', height: '12vh'}} alt='rings'></img>
      </div>


      <div style={{color: '#D6684D'}}>
        <img src={mag} style={{ width: '50%'}} alt='Mag'></img>
      </div>
    </div>
  );
}

export default LandingPage;
