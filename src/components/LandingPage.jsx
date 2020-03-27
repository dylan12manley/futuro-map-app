import React from 'react';
import { Link } from 'react-router-dom';
import A1 from './../assets/images/landing/A1.png'
import E1 from './../assets/images/landing/E1.png'
import F1 from './../assets/images/landing/F1.png'
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
import FM1 from './../assets/images/landing/FM1.png'
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
    height: '100vh',
    fontFamily: 'Black Ops One',
    textAlign: 'center',
  }
  const styledLetterImgs = {
    height: '6vmin',
    width: '6vmin',
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
      <h2 style={{
            color: '#D6684D',
            textDecoration: 'underline-overline',
            border: '2vmin double #485266',
            padding: '1vmin'
         }}>FUTURO<br>
       </br>MAGAZINE
      </h2>
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

        <img src={F1} style={styledLetterImgs}></img>
        <img src={U1} style={styledLetterImgs}></img>
        <img src={T1} style={styledLetterImgs}></img>
        <img src={U1} style={styledLetterImgs}></img>
        <img src={R1} style={styledLetterImgs}></img>
        <img src={O1} style={styledLetterImgs}></img>
        <p>   </p>
        <img src={M1} style={styledLetterImgs}></img>
        <img src={A1} style={styledLetterImgs}></img>
        <img src={G1} style={styledLetterImgs}></img>
        <img src={A1} style={styledLetterImgs}></img>
        <img src={Z1} style={styledLetterImgs}></img>
        <img src={I1} style={styledLetterImgs}></img>
        <img src={N1} style={styledLetterImgs}></img>
        <img src={E1} style={styledLetterImgs}></img>
      </div>

      <div style={{ backgroundColor: '#9FC0E0',
                    color: '#D6684D',
                  }}>
        <img src={FM1} style={styledMagImgs}></img>
        <img src={F1} style={styledLetterImgs2}></img>
        <img src={mag1} style={styledMagImgs}></img>
      </div>

      <div style={{ backgroundColor: '#485266',
                    color: '#D6684D',
                  }}>

        <img src={futuro2} style={styledMagazineTitle}></img>
        <img src={Magazine2} style={styledMagazineTitle}></img>
      </div>

      <div style={{ backgroundColor: '#9FC0E0',
                    color: '#D6684D',
                  }}>

        <img src={futuro1} style={styledMagazineTitle}></img>
        <img src={Magazine1} style={styledMagazineTitle}></img>
      </div>
    </div>

  );
}

export default LandingPage;
