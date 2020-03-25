import React from "react";

function SignIn(){

      const styledErrors = {
        backgroundColor: '#183023',
        color: '#8E545E',
        padding: '5vw',
        margin: '5vw',
        height: '100vh',
        border: '3px double #4A5468',
      }

      return (
        <div style={styledErrors}>
        <h1>Sign In</h1>
          <h2 style={{
                color: '#D6684D',
                textDecoration: 'underline-overline',
                border: '3px double #485266',
             }}>Sign In:
          </h2>
          <div style={{
                // backgroundColor: '#9FC0E0',

                padding: '12px',
                }}>
            <h3 style={{ textDecoration: 'none',
                         color: '#D6684D'
                }}> Sign Up:
            </h3>
          </div >
        </div>
      );

  }

export default SignIn
