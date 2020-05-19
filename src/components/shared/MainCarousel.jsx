import React from "react";
import { Carousel } from 'antd';
import futuro from '../../assets/images/Futuro.jpg';
import iOS2 from '../../assets/images/iOS2.jpg';
import iOS3 from '../../assets/images/iOS3.jpg';

const styledCarousel = {
  paddingTop: '75px',
  height: '47vh',
}

const styledImage = {
  height: '46vh',
  width: '100%',
}


function MainCarousel(){
  return (
    <div style={styledCarousel}>
      <Carousel>
        <div>
            <img src={futuro} alt={futuro} style={styledImage}></img>
        </div>
        <div>
          <img src={iOS2} alt={iOS2} style={styledImage}></img>
        </div>
        <div>
          <img src={iOS3} alt={iOS3} style={styledImage}></img>
        </div>
    </Carousel>
    </div>
  );
}


export default MainCarousel;