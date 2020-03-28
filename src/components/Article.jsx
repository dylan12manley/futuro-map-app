import React from "react";
import PropTypes from "prop-types";


function Article(props){
  return (
    <>
      <div>
        <h4>{props.title}</h4>
        <p><em>{props.headline}</em></p>
        <p><em>{props.date}</em></p>
        <h5>{props.author}</h5>
        <img src={props.mainImg}></img>
        <p>{props.body}</p>
      </div>
      <hr/>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  headline: PropTypes.string,
  body: PropTypes.string,
  mainImg: PropTypes.string,
  id: PropTypes.string,
};

export default Article;
