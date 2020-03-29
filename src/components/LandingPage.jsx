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
    height: '35vh',
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

  const styledMagazineTitle = {
    height: '24vmin',
    width: '63vmin',

  }

  return (
    <div style={styledLanding}>
      <div style={styledMagazineTitle}>
        <img src={futuro} style={{width: '60%', height: '75px', transform: 'rotate(325deg)'}} alt='Futuro'></img>
        <img src={mag} style={{ width: '57%', transform: 'rotate(315deg)'}} alt='Mag'></img>
      </div>
      <div style={styledLanding}>
        <h2 style={{
              color: '#D6684D',
              textDecoration: 'underline-overline',
              border: '2vmin double #485266',
              padding: '1vmin',
              backgroundColor: '#183023',
              height: '20vh',
              fontFamily: 'Black Ops One',
          }}>
          <img src={rings2} style={styledLetterImgs} alt='rings2'></img>
          <img src={F1} style={styledLetterImgs} alt='U1'></img>
          <img src={U1} style={styledLetterImgs} alt='U1'></img>
          <img src={T1} style={styledLetterImgs} alt='T1'></img>
          <img src={U1} style={styledLetterImgs} alt='U1'></img>
          <img src={R1} style={styledLetterImgs} alt='R1'></img>
          <img src={O1} style={styledLetterImgs} alt='O1'></img><br>
        </br>
          <img src={M1} style={styledLetterImgs} alt='M1'></img>
          <img src={A1} style={styledLetterImgs} alt='A1'></img>
          <img src={G1} style={styledLetterImgs} alt='G1'></img>
          <img src={A1} style={styledLetterImgs} alt='A1'></img>
          <img src={Z1} style={styledLetterImgs} alt='Z1'></img>
          <img src={I1} style={styledLetterImgs} alt='I1'></img>
          <img src={N1} style={styledLetterImgs} alt='N1'></img>
          <img src={E1} style={styledLetterImgs} alt='E1'></img>
          <img src={rings2} style={{height: '6vmin',
          width: '6vmin',
          filter: 'sepia(80%)',
          transform: 'rotate(180deg)'}} alt='rings2' ></img>

        </h2>
      </div>
      <div style={{ backgroundColor: '#183023', color: '#D6684D'}}>
        <img src={rings1} style={styledMagImgs} alt='rings'></img>
        <Link to="/home" style={{ textDecoration: 'none', color: '#D6684D'}}><img src={fm} style={styledMagImgs} alt='FM'></img> </Link>
        <img src={rings1} style={{transform:'rotate(180deg)', height: '24vmin',
        width: '33vmin',}} alt='rings'></img>
      </div>


      <div style={{color: '#D6684D'}}>
        <img src={futuro} style={{width: '35%', height: '105px'}} alt='Futuro'></img>
        <img src={mag} style={{ width: '50%'}} alt='Mag'></img>
      </div>
    </div>
  );
}

export default LandingPage;
