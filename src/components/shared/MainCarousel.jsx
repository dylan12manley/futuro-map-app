import React from "react";
import { Carousel } from 'antd';
import futuro from '../../assets/images/Futuro.jpg';

const styledCarousel = {
  paddingTop: '60px',
  height: '42vh',
}

const styledImage = {
  height: '41vh',
  width: '100%',
}


function MainCarousel(){
  return (
    <div style={styledCarousel}>
      <Carousel autoplay>
        <div>
            <img src={futuro} alt={futuro} style={styledImage}></img>
        </div>
        <div>
          <img src={futuro} alt={futuro} style={styledImage}></img>
        </div>
    </Carousel>
    </div>
  );
}


export default MainCarousel;