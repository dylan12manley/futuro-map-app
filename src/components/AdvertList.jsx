import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

import Advert from "./Advert";


function AdvertList(props){

  useFirestoreConnect([
    { collection: 'articles' }
  ]);

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
