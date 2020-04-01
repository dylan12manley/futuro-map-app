import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainCarousel from "./MainCarousel";
import FakeArticle from "./FakeArticle";
// import ArticleList from "./ArticleList";
import FakeAdvert from "./FakeAdvert";
import Sidebar from "./Sidebar";
import { Row, Col } from 'antd';



function Home(){

  return (
    <div >
      <Header/>
      <Row>
        <Col xl={0} xxl={1}>
          <Sidebar/>
        </Col>
        <Col xl={24} xxl={22}>
         <MainCarousel/>
        </Col>
        <Col xl={0} xxl={1}>
          <Sidebar/>
        </Col>
      </Row>
      <Row>
        <Col lg={0} xl={1} xxl={1}>
        <Sidebar/>
        </Col>
        <Col  xs={24} sm={16} lg={17} xl={16} xxl={15}>
          <FakeArticle/>
        </Col>
        <Col xs={24} sm={8} lg={7} xl={6} xxl={5}>
          
          <FakeAdvert/>
        </Col>
        <Col lg={0} xl={1} xxl={1}>
        <Sidebar/>
        </Col>
        <Col lg={0} xl={0} xxl={2}>
        <Sidebar/>
        </Col>
      </Row>
      <Footer/>
    </div>

  )}

export default Home;
