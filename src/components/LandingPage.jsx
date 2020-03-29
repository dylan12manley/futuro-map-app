import React from 'react';
import { Link } from 'react-router-dom';
import A1 from './../assets/images/landing/A1.png'
import E1 from './../assets/images/landing/E1.png'
import rings2 from './../assets/images/rings2.png'
import G1 from './../assets/images/landing/G1.png'
import I1 from './../assets/images/landing/I1.png'
import M1 from './../assets/images/landing/M1.png'
import N1 from './../assets/images/landing/N1.png'
import O1 from './../assets/images/landing/O1.png'
import R1 from './../assets/images/landing/R1.png'
import T1 from './../assets/images/landing/T1.png'
import U1 from './../assets/images/landing/u1.png'
import Z1 from './../assets/images/landing/Z1.png'
import mag1 from './../assets/images/landing/mag1.png'
import fm from './../assets/images/FM.png'
import futuro1 from './../assets/images/landing/futuro1.png'
import futuro2 from './../assets/images/landing/futuro2.png'
import Magazine1 from './../assets/images/landing/Magazine1.png'
import Magazine2 from './../assets/images/landing/Magazine2.png'
import Rings1 from './../assets/images/landing/Rings1.png'

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
        </h2>
      </div>
      <div style={{
            backgroundColor: '#9FC0E0',
            border: '0.4px solid #4A5468',
            padding: '12px',
            }}>

        <h3>GO<Link to="/home" style={{ textDecoration: 'none',
                                        color: '#D6684D',
                                      }}> HOME</Link>?</h3>
      </div >
      <div style={{ backgroundColor: '#485266',
                    color: '#D6684D',
                  }}>


        <p>   </p>

      </div>

      <div style={{ backgroundColor: '#9FC0E0',
                    color: '#D6684D',
                  }}>
        <img src={Rings1} style={styledMagImgs} alt='rings'></img>
        <img src={rings2} style={styledLetterImgs2} alt='rings'></img>
        <img src={fm} style={styledMagImgs} alt='FM'></img>
        <img src={mag1} style={styledMagImgs} alt='Mag'></img>
        <img src={Rings1} style={styledMagImgs} alt='rings'></img>
      </div>

      <div style={{ backgroundColor: '#485266',
                    color: '#D6684D',
                  }}>

        <img src={futuro2} style={styledMagazineTitle} alt='futuro'></img>
        <img src={Magazine2} style={styledMagazineTitle} alt='Magazine'></img>
      </div>

      <div style={{ backgroundColor: '#9FC0E0',
                    color: '#D6684D',
                  }}>

        <img src={futuro1} style={styledMagazineTitle} alt='futuro'></img>
        <img src={Magazine1} style={styledMagazineTitle} alt='Magazine'></img>
      </div>
    </div>

  );
}

export default LandingPage;
