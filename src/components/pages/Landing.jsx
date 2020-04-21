import React from 'react';
import { Link } from 'react-router-dom';

import rings1 from '../../assets/images/rings1BnW.png'
import fm from '../../assets/images/FMBnW.png'
import f from '../../assets/images/greenf.png'
import utu from '../../assets/images/utu.png'
import ro from '../../assets/images/ro.png'

function Landing(){
  // const landingStz = {
  //   backgroundColor: '#183023',
  //   color: '#8E545E',
  //   padding: '50px',
  //   height: '100vh',
  //   textAlign: 'center',
  //   filter: 'grayscale(.75)',
  // }

  const bigFStz = {
    height: 'calc(50px + 36vmin)',
    filter: 'grayscale(.15)',
  }

  const title2 = {
    height: 'calc(20px + 24vmin)',
    filter: 'grayscale(.15)',
  }

  function changeBackground(e) {
    e.target.style.height = '80px';
    e.target.style.brightness = '2';
  }

  return (
    <div style={{textAlign: 'center',}}>
      <div>
          <img src={rings1} 
               style={{height: '12vh'}} 
               alt='rings'>
          </img>
          <Link to="/home" 
                style={{ filter: 'brightness(1.87)' }}>
            <img src={fm} 
                 onMouseOver={changeBackground}
                 style={{ height: '10vh' }} 
                 alt='FM'>
            </img> 
          </Link>
          <img src={rings1} style={{transform:'rotate(180deg)', height: '12vh'}} alt='rings'></img>
        </div>
      <div >
          <img style={bigFStz} src={f} alt='Futuro'></img>
        <img src={utu} style={title2} alt='utu'></img>
        <img src={ro} alt='ro'></img>
      </div>




        <div>
          <img src={rings1} 
               style={{height: '12vh'}} 
               alt='rings'>
          </img>
          <Link to="/home" 
                style={{ textDecoration: 'none', 
                         color: '#D6684D', 
                         filter: 'brightness(2)'}}>
            <img src={fm} 
                 style={{height: '10vh'}} 
                 alt='FM'>
            </img> 
          </Link>
          <img src={rings1} style={{transform:'rotate(180deg)', height: '12vh'}} alt='rings'></img>
        </div>
    </div>
  );
}

export default Landing;
