import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import People from "../pages/People";
import FakeAdvert from "../shared/FakeAdvert";
import Sidebar from "../shared/Sidebar";
import { Row, Col } from 'antd';



function PeoplePage(){

  return (
    <div >
      <Header/>
      <Row>
        <Col lg={0} xl={1} xxl={2}>
        <Sidebar/>
        </Col>
        <Col  xs={24} sm={24} lg={17} xl={16} xxl={15}>
          <People/>
        </Col>
        <Col xs={24} sm={24} lg={7} xl={6} xxl={5}>
          <FakeAdvert/>
        </Col>
        <Col lg={0} xl={1} xxl={2}>
        <Sidebar/>
        </Col>
      </Row>
      <Footer/>
    </div>

  )}

export default PeoplePage;