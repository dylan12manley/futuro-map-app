import React from "react";
import ArticleList from "./ArticleList";
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { withFirestore, isLoaded } from 'react-redux-firebase';

import Header from "./Header";
import MainCarousel from "./MainCarousel";
import AdvertList from "./AdvertList";




class Admin extends React.Component {
 

  render(){
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the queue.</h1>
          <Link to="/signin" >Sign In</Link>
        </React.Fragment>
      )
    } 
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      return(
      <React.Fragment>
      <Header/>
      <Row>
        <Col>
          <MainCarousel/>
        </Col>
      </Row>
      <Row>
        <Col  xs={24} sm={16} lg={17} xl={16} xxl={16}
              style={{marginTop: '55px',
              padding: 'calc(8px + 1vmin)',
              color: '#38171C'
        }}>
        <h1>Yo🛸Bru💓</h1> 
        <Link to="/signin" >Sign In</Link>
        <br></br>
        <Link to="/newarticleForm" >New Article</Link>
          <ArticleList/>
        </Col>
        <Col xs={24} sm={8} lg={7} xl={8} xxl={8}
        style={{marginTop: '55px',
              padding: 'calc(8px + 1vmin)',
              color: '#38171C'
        }}>
          <AdvertList/>
        </Col>
      </Row>
      </React.Fragment>
      )
    }
  }
}


export default withFirestore(Admin);