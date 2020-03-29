import React from "react";
import PropTypes from "prop-types";
import { Card } from 'antd';

import './../styles/article.css';

const { Meta } = Card;

function Article(props){
  return (
    <>
      <Card hoverable
            title=<h2>{props.title}</h2>
            extra=<p>{props.author} </p>
            cover={<img alt="article" src={props.mainImg} />}
            style={{}}>
        <div className='articleBottom'>
          <p className='date'>{props.date}</p>
          <p>{props.headline}</p>
        </div>
      </Card>
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
