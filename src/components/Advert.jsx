import React from "react";
import PropTypes from "prop-types";




function Advert(props){
  return (
    <>
      <div>
      <p>{props.title}</p>
      <a href={props.redirectUrl}>
        <img src={props.img} alt={props.alt}></img>
      </a>
      </div>
      <hr/>
    </>
  );
}


export default Advert;

Advert.propTypes = {
  title: PropTypes.string,
  redirectUrl: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
};
