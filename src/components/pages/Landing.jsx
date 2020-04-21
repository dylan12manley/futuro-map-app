import React from 'react';
import { Link } from 'react-router-dom';


import rings1 from '../../assets/images/rings1BnW.png'
import fm from '../../assets/images/FMBnW.png'
import f from '../../assets/images/greenf.png'
import utu from '../../assets/images/utu.png'
import ro from '../../assets/images/ro.png'

function Landing(){
  const styledLanding = {
    backgroundColor: '#183023',
    color: '#8E545E',
    padding: '50px',
    height: '100vh',
    textAlign: 'center',
    filter: 'grayscale(.75)',
  }




  return (
    <div style={styledLanding}>
      <div style={{paddingTop: '18vh',
                   }}
      >
        <div style={{height: '20vh'}}>
          <img src={f} alt='Futuro'></img>
        </div>
        <div>
          <img src={rings1} style={{height: '12vh'}} alt='rings'></img>
          <Link to="/home" style={{ textDecoration: 'none', color: '#D6684D', filter: 'brightness(2)'}}><img src={fm} style={{height: '10vh'}} alt='FM'></img> </Link>
          <img src={rings1} style={{transform:'rotate(180deg)', height: '12vh'}} alt='rings'></img>
        </div>
      </div>


      <div>
        <img src={utu} alt='utu'></img>
        <img src={ro} alt='ro'></img>
      </div>
    </div>
  );
}

export default Landing;
