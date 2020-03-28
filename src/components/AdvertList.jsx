import React from "react";
import dior from './../../images/dior.jpg'
import keene from './../../images/keene.jpg'
import arTecHouse from './../../images/artechouse.png'
import taschen from './../../images/Taschen.png'
import tein from './../../images/TEIN.jpg'

const advertList = [
  {
    title: 'ad number 1',
    url: 'https://www.keane-eyes.com/',
    img: keene,
    id: 1
  },
  {
    title: 'ad number 2',
    url: 'https://www.dior.com/en_us',
    img: taschen,
    id: 2
  },
  {
    title: 'ad number 3',
    url: 'https://www.dior.com/en_us',
    img: dior,
    id: 3
  },
  {
    title: 'ad number 4',
    url: 'https://www.keane-eyes.com/',
    img: arTecHouse,
    id: 4
  }
  {
    title: 'ad number 5',
    url: 'https://www.keane-eyes.com/',
    img: arTecHouse,
    id: 5
  }
]

function AdvertList(){

  return (
    <>
    <div>
      {Object.values(props.advertList).map((advert) => {
        return <Article
          title={advert.title}
          headline={advert.headline}
          body={advert.body}
          author={advert.author}
          date={advert.date}
          category={advert.category}
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
