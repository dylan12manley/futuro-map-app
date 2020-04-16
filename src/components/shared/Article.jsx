import React from "react";
import PropTypes from "prop-types";
import { Card, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const imageStyle = {
  overflow: 'hidden',
  maxHeight: '50vmin',
  maxwidth: '50vmin',
}

function Article(props){
//(conditional if there is not any img 2 through 9. //
  if(!props.img2 && !props.img3 && !props.img4 && !props.img5 && !props.img6 && !props.img7 && !props.img8 && !props.img9 )
  return (
    <>
      <Card 
        hoverable
        title={<h2>{props.title}</h2>}
        cover={<img alt="article" src={props.mainImg} style={{ overflow: 'hidden'}}/>}
        headStyle={{
          fontFamily: 'Rubik',
          fontWeight: '100',
          margin:'0px',
          height: '42px'}}
        bodyStyle={{
          color: '#1C0B0D',
          fontFamily: 'Rubik'}}>
        <div className='articleBottom'>
          <p 
            style={{
              fontSize: '18px',
              margin: '8px'}}
          >
          {props.author} 
          <span 
            style={{
              paddingLeft: '15vw'}}>
            {props.date} 
          </span>
          </p>
          <p 
            style={{
              fontWeight: '500',
              margin: '0px'}}>
          {props.headline}
          </p>
        </div>
      </Card>
      <Collapse
        bordered={false}
        defaultActiveKey={['0']}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse"
      >
        <Panel header="Read the rest?" key="1" className="site-collapse-custom-panel">
          <p>{props.p1}</p>
          <img src={props.img2} alt='img2' style={imageStyle}></img>
          <p>{props.p2}</p>
          <img src={props.img3} alt='img3' style={imageStyle}></img>
          <p>Full Article?</p>
          <div></div>
        </Panel>
      </Collapse>
      <hr/>
    </>
  );
  //Conditional filtering out articles missing img6-9 
  else if ( !props.img6 && !props.img7 && !props.img8 && !props.img9) return (
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
      </div>
    </Card>
);
  else return (
    
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
        </div>
      </Card>
     
  );

}

Article.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  headline: PropTypes.string,
  p1: PropTypes.string,
  p2: PropTypes.string,
  category: PropTypes.string,
  mainImg: PropTypes.string,
  Img2: PropTypes.string,
  Img3: PropTypes.string,
  id: PropTypes.string,
};

export default Article;