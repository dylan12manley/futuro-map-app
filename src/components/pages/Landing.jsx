import React from 'react';
import { Link } from 'react-router-dom';

import rings1 from '../../assets/images/rings1BnW.png'
import fRed from '../../assets/images/redF.png'
import f from '../../assets/images/blueF.png'
import uturo from '../../assets/images/uturo-RnB.png'

function Landing(){
  const bigFStz = {
    height: 'calc(50px + 36vmin)',
    filter: 'grayscale(.15)',
  }

  const title2 = {
    height: 'calc(20px + 24vmin)',
    filter: 'grayscale(.15)',
  }

  function changeUturo(e) {
    e.target.style.transform = 'rotate(180deg)';
    e.target.style.filter = 'grayscale(.15)';
  }

  function changeF(e) {
    e.target.style.transform = 'rotate(90deg)';
    e.target.style.filter = 'grayscale(.15)';
  }

  function clickF(e) {
    e.target.style.transform = 'rotate(-2deg)';
  }

  function clickUturo(e) {
    e.target.style.transform = 'rotate(2deg)';
  }

  function displayNone(e) {
    e.target.style.display = 'none';
  }

  function mouseRedF(e) {
    e.target.style.height = '305px';
    e.target.style.transform = 'rotate(270deg)';
  }

  return (
    <div style={{textAlign: 'center', backgroundColor: 'black', height: '100vh'}}>
      <div style={{paddingTop: '10vh'}} >
        <img 
          style={bigFStz} 
          src={f} alt='F' 
          onMouseOver={changeF}
          onClick={clickF}
        ></img>
        <img 
          src={uturo} 
          style={title2} 
          alt='uturo' 
          onMouseOver={changeUturo}
          onClick={clickUturo}
        >
        </img>
      </div>

        <div>
          <img src={rings1} 
               style={{height: '12vh'}} 
               alt='rings'
               onMouseOver={displayNone}>
          </img>
          <Link to="/home" 
                style={{ textDecoration: 'none', 
                         color: '#D6684D', 
                         filter: 'brightness(2)'}}>
            <img src={fRed} 
                 style={{height: '10vh'}} 
                 onMouseOver={mouseRedF}
                 alt='FM'>
            </img> 
          </Link>
          <img 
            src={rings1} 
            style={{transform:'rotate(180deg)', height: '12vh'}} 
            onMouseOver={displayNone}
            alt='rings'>

          </img>
        </div>
    </div>
  );
}

export default Landing;
