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
            cover={<img alt="article" src={props.mainImg} />}
            headStyle={{
              margin:'0px',
              height: '42px'
            }}
            bodyStyle={{
              color: '#1C0B0D'
            }}>
        <div className='articleBottom'>
          <p style={{
            fontSize: '18px',
            margin: '8px'
          }}>{props.author} <span style={{
            paddingLeft: '15vw'
          }}>{props.date} </span></p>
          <p style={{
            margin: '0px'}}
            >{props.headline}</p>
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
