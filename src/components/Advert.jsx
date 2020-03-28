import React from "react";
import PropTypes from "prop-types";

import dior from '../assets/images/dior.jpg'
import keene from '../assets/images/keene.jpg'
import arTecHouse from '../assets/images/artechouse.png'
import taschen from '../assets/images/Taschen.png'
import tein from '../assets/images/TEIN.jpg'
import './../styles/article.css'

const advertList = [
  {
    title: 'ad number 1',
    redirectUrl: 'https://www.keane-eyes.com/',
    img: keene,
    alt: 'Keene',
    id: 1
  },
  {
    title: 'ad number 2',
    redirectUrl: 'https://www.dior.com/en_us',
    img: taschen,
    id: 2
  },
  {
    title: 'ad number 3',
    redirectUrl: 'https://www.dior.com/en_us',
    img: dior,
    alt: 'Dior',
    id: 3
  },
  {
    title: 'ad number 4',
    redirectUrl: 'https://www.keane-eyes.com/',
    img: arTecHouse,
    alt: 'arTecHouse',
    id: 4
  },
  {
    title: 'ad number 5',
    redirectUrl: 'https://www.store.teinclothing.com/',
    img: tein,
    alt: 'T.E.I.N.',
    id: 5
  }
]

function Advert(props){
  return (
    <>
      <div>
        <a href={props.redirectUrl}>
          <img src={props.img} alt={props.alt}></img>
        </a>
      </div>
      <hr/>
    </>
  );
}

Advert.propTypes = {
  title: PropTypes.string,
  redirectUrl: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
};

export default Advert;
