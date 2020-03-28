import React from "react";
import PropTypes from "prop-types";

import './../styles/article.css'

function Article(props){
  return (
    <>
      <div>
        <div className='articleTop'>
          <h2 className='articleTitle'>{props.title}</h2>
          <p>{props.author} <span className='date'>{props.date}</span></p>
        </div>
        <div className='articleBottom'>
          <p>{props.headline}</p>
          <img src={props.mainImg}></img>
          <p>{props.body}</p>
        </div>
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
