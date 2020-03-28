import React from "react";
import dior from './../../images/dior.jpg'
import keene from './../../images/keene.jpg'
import arTecHouse from './../../images/artechouse.png'
import taschen from './../../images/Taschen.png'
import tein from './../../images/TEIN.jpg'

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
  }
  {
    title: 'ad number 5',
    redirectUrl: 'https://www.store.teinclothing.com/',
    img: tein,
    alt: 'T.E.I.N.',
    id: 5
  }
]

function AdvertList(){

  return (
    <>
    <div>
      {Object.values(props.advertList).map((advert) => {
        return <Advert
          title={advert.title}
          redirectUrl={advert.redirectUrl}
          img={advert.img}
          alt={advert.alt}
          id={advert.id}
          key={advert.id}/>
      })}
    </div>
    </>
  );
  }

  AdvertList.propTypes = {
  advertList: PropTypes.object
  }


  export default AdvertList;
