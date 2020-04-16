import React from "react";
import PropTypes from "prop-types";
import { Card, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const paragraphStyle = {
  fontFamily: 'Rubik',
  fontSize: 'calc(12px + .6vmin',
}

const imageStyle = {
  overflow: 'hidden',
  maxHeight: '50vmin',
  maxwidth: '50vmin',
}


const { Panel } = Collapse;

function ArticleFull(props) {
    if(props.body){
        return (
            <>
              <Card 
                hoverable
                title={<h2>{props.title}</h2>}
                cover={<img 
                  alt="article" 
                  src={props.mainImg} 
                  style={{ overflow: 'hidden'}}
                />}
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
              <div >
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
              <Collapse
                bordered={false}
                defaultActiveKey={['0']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className="site-collapse-custom-collapse"
              >
                <Panel header="Read the rest?" key="1" className="site-collapse-custom-panel">
                  <p>{props.body}</p>
                  <div></div>
                </Panel>
              </Collapse>
              <hr/>
            </>
          );
    } else if (props.img6) {
    return (
      <>
        <Card hoverable
          title={
            <h2>{props.title}
            <span style={{
              fontSize: '16px',
              paddingLeft: '5vmin'
              }}>{props.date} by: {props.author}</span>
            </h2>
          }
          cover={<img 
            alt="article" 
            src={props.mainImg} 
            style={{ overflow: 'hidden'}}
          />}
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
          <div style={paragraphStyle}>
          <div>
           <p>{props.p1}</p>
           <img src={props.img2} alt='img2' style={imageStyle}></img>
          </div>
          <div>
           <p>{props.p2}</p>
           <img src={props.img3} alt='img3' style={imageStyle}></img>
          </div>
          <div>
           <p>{props.p3}</p>
           <img src={props.img4} alt='img4' style={imageStyle}></img>
          </div>
          <div>
           <p>{props.p4}</p>
           <img src={props.img5} alt='img5' style={imageStyle}></img>
          </div>
          <div>
           <p>{props.p5}</p>
           <img src={props.img6} alt='img6' style={imageStyle}></img>
          </div>
          <div>
           <p>{props.p6}</p>
           <img src={props.img7} alt='img7' style={imageStyle}></img>
          </div>
          <div>
           <img src={props.img8} alt='img8' style={imageStyle}></img>
           <img src={props.img9} alt='img9' style={imageStyle}></img>
          </div>
          </div>
          </Card>
        <hr/>
      </>
    );}
    else return (
        <>
          <Card hoverable
            title={
              <h2>{props.title}
              <span style={{
                fontSize: '16px',
                paddingLeft: '5vmin'
                }}>{props.date} by: {props.author}</span>
              </h2>
            }
            cover={<img 
              alt="article" 
              src={props.mainImg} 
              style={{ overflow: 'hidden'}}
            />}
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
            <div style={paragraphStyle}>
              <div>
                <p>{props.p1}</p>
                <img src={props.img2} alt='img2' style={imageStyle}></img>
              </div>
              <div>
                <p>{props.p2}</p>
                
              </div>
              <div>
                <p>{props.p3}</p>
                <img src={props.img3} alt='img3' style={imageStyle}></img>
              </div>
              <div>
                <p>{props.p4}</p>
              </div>
              <div>
                <p>{props.p5}</p>
                <img src={props.img4} alt='img4' style={imageStyle}></img>
              </div>
              <div>
                <p>{props.p5}</p>
              </div>
              <div>
                <p>{props.p6}</p>   
                <img src={props.img5} alt='img5' style={imageStyle}></img>       
              </div>
            </div>
            </Card>
          <hr/>
        </>
      );
  
}

ArticleFull.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    headline: PropTypes.string,
    p1: PropTypes.string,
    p2: PropTypes.string,
    p3: PropTypes.string,
    p4: PropTypes.string,
    p5: PropTypes.string,
    p6: PropTypes.string,
    category: PropTypes.string,
    mainImg: PropTypes.string,
    img2: PropTypes.string,
    img3: PropTypes.string,
    img4: PropTypes.string,
    img5: PropTypes.string,
    img6: PropTypes.string,
    img7: PropTypes.string,
    img8: PropTypes.string,
    img9: PropTypes.string,
    id: PropTypes.string,
  };




export default ArticleFull;