import React from "react";
import PropTypes from "prop-types";

import './../styles/article.css'

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
