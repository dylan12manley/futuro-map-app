import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage(){
  const styledLanding = {
    backgroundColor: '#183023',
    color: '#8E545E',
    padding: '50px',
    height: '100vh',
    fontFamily: 'Black Ops One'
  }
  return (
    <div style={styledLanding}>
      <h2 style={{
            color: '#D6684D',
            textDecoration: 'underline-overline',
            border: '1.2px double #485266',
         }}>The page you are looking<br>
       </br>for does not exist!
      </h2>
      <div style={{
            backgroundColor: '#9FC0E0',
            border: '0.4px solid #4A5468',
            padding: '12px',
            }}>
        <h3>Would you like to return
          <Link to="/article" style={{ textDecoration: 'none',
                           color: '#D6684D',
              }}>Article</Link>,<br>
          </br>or the <Link to="/">landing page</Link>instead?
        </h3>
      </div >
    </div>
  );
}

export default LandingPage;
