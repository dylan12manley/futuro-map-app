import React from "react";
import { useFirestore } from 'react-redux-firebase';
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';

function NewArticleForm(){
  const firestore = useFirestore();
  function addArticleToFirestore(event) {
    event.preventDefault();
    window.alert('article added')
    return firestore.collection('articles').add(
      {
        title: event.target.title.value,
        author: event.target.author.value,
        date: event.target.date.value,
        headline: event.target.headline.value,
        body: event.target.body.value,
        category: event.target.category.value,
        mainImg: event.target.mainImg.value,
        img2: event.target.img2.value
      }
    );
  }
  const formStyle = { padding: '5vmin', backgroundColor: '#183023', color: '#8E545E', height: '100%', minHeight: "100vh", fontFamily: 'Black Ops One', textAlign: 'center'}
  const inputStyle = { margin: '2.5vmin' }
  return (
      <div style={formStyle}>
        <form onSubmit={addArticleToFirestore}>
          <Row>
            <Col lg={0} xl={1} xxl={2}></Col>
            <Col xs={24} sm={8} lg={8} xl={7} xxl={6}>
              <input
                type='text'
                name='title'
                placeholder='Title' 
                style={inputStyle}/>
            </Col>
            <Col xs={24} sm={8} xxl={8}>
              <input
                type='text'
                name='author'
                placeholder='Author' 
                style={inputStyle}/>
            </Col>
            <Col xs={24} sm={8} lg={8} xl={7} xxl={6}>
              <input
                type='text'
                name='date'
                placeholder='Date' 
                style={inputStyle}/>
            </Col>
            <Col lg={0} xl={1} xxl={2}></Col>
          </Row>
          <Row>
            <Col lg={1} xl={2} xxl={3}></Col>
            <Col xs={24} sm={10} lg={10} xl={9} xxl={8}>
              <textarea
                type='text'
                name='headline'
                placeholder='Headline'
                style={{
                  width: '72%',
                  marginLeft: '4vmin',
                  margin: '2.5vmin',
                }}/>
              <br></br>
              <input
                type='text'
                name='category'
                placeholder='Category'
                style={inputStyle}/>
              <br></br>
              <input
                type='string'
                name='mainImg'
                placeholder='URL for Main Image'
                style={inputStyle}/>
                <br></br>
              <input
                type='string'
                name='img2'
                placeholder='URL for Seccong Image'
                style={inputStyle}/>
            </Col>
             <Col xs={24} sm={10} lg={10} xl={9} xxl={8}>
            <textarea
              name='body'
              placeholder='Content Body'
              style={{
                width: '100%',
                marginLeft: '4vmin',
                margin: '2.5vmin',
                height: '30vmin',
              }}/>
              </Col>
            <Col lg={0} xl={1} xxl={2}></Col>
          </Row>
            <button 
            type='submit'
            style={{height: 'calc(8px+2vh)',
                    width: '20vh',
                    fontSize: '2.75vh',
                    borderRadius: '5px',
                    border: '6px double', 
                    overflow: 'hide',
                    }}>Add Article</button>
        </form>
        <div 
          style={{paddingTop: '4vh',
                  textAlign: 'center',
                   color: '#8E545E',}}>
          <Link to="/admin" >Admin Page</Link>
          <br></br>
          <Link to="/home" >Home</Link>
        </div>
      </div>
    );
  }


  export default NewArticleForm;
