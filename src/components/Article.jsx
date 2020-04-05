import React from "react";
import PropTypes from "prop-types";
import { Card, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

function Article(props){
  return (
    <>
      <Card hoverable
            
            title={<h2>{props.title}</h2>}
            cover={<img alt="article" src={props.mainImg} style={{ overflow: 'hidden'}}/>}
            headStyle={{
              fontFamily: 'Rubik',
              fontWeight: '100',
              margin:'0px',
              height: '42px'
            }}
            bodyStyle={{
              color: '#1C0B0D',
              fontFamily: 'Rubik',
            }}>
        <div className='articleBottom'>
          <p style={{
            fontSize: '18px',
            margin: '8px',
          }}>{props.author} <span style={{
            paddingLeft: '15vw'
          }}>{props.date} </span></p>
          <p style={{
            fontWeight: '500',
            margin: '0px'}}
            >{props.headline}</p>
          <Collapse
            bordered={false}
            defaultActiveKey={['0']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className="site-collapse-custom-collapse"
          >
            <Panel header="Read the rest?" key="1" className="site-collapse-custom-panel">
              <p>{props.body}</p>
              <img src={props.img2} alt='Seccond Img'></img>
            </Panel>
          </Collapse>
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
  category: PropTypes.string,
  mainImg: PropTypes.string,
  Img2: PropTypes.string,
  id: PropTypes.string,
};

export default Article;
