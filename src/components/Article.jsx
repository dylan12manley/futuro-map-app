import React from "react";
import PropTypes from "prop-types";


function Article(props){
  return (
    <>
      <div>
        <h4>{props.title}</h4>
        <h5>{props.author}</h5>
        <p><em>{props.date}</em></p>
        <p><em>{props.headline}</em></p>
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
  id: PropTypes.string,
};

export default Article;
