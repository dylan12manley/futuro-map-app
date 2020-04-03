import React from "react";
import ArticleList from "./ArticleList";
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";

import Header from "./Header";
import MainCarousel from "./MainCarousel";
import FakeAdvert from "./FakeAdvert";




function Admin(){

  return (
    <>
      <Header/>
      <Row>
        <Col>
         <MainCarousel/>
        </Col>
      </Row>
      <Row>
        <Col  xs={24} sm={16} lg={17} xl={16} xxl={16}>
        <Link to="/newarticleForm" >New Article</Link>
          <ArticleList/>
        </Col>
        <Col xs={24} sm={8} lg={7} xl={8} xxl={8}>
          <FakeAdvert/>
        </Col>
      </Row>
    </>

  )}

export default Admin;