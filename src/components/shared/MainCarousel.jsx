import React from "react";
import { Carousel } from 'antd';
import futuro from '../../assets/images/Futuro.jpg';
import iOS2 from '../../assets/images/iOS2.jpg';
import iOS3 from '../../assets/images/iOS3.jpg';

const styledCarousel = {
  paddingTop: '75px',
  height: 'calc(42vh + 30px)',
}

const styledImage = {
  height: 'calc(41vh + 30px)',
  width: '100%',
}

const preHead = {
  height: '30px',
  width: '89%',
  background: 'white',
}

const head = {
  height: '30px',
  width: '100%',
  background: 'black',
}

function MainCarousel(){
  return (
    <div style={styledCarousel}>
      <div style={preHead}></div>
      <div style={head}></div>
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