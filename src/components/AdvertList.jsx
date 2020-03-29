import React from "react";
import PropTypes from "prop-types";

import Advert from "./Advert";


function AdvertList(props){

  return (
    <>
    <div style={advertStyle}>
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
