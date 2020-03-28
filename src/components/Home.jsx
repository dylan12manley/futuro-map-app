import React from "react";
import Header from "./Header";
import FakeArticle from "./FakeArticle";
import FakeAdvert from "./Advert";

import { Row, Col } from 'react-bootstrap';


function Home(){

  return (
    <div >
      <Header/>
      <Row className='row'>
        <Col>
          <FakeArticle/>
        </Col>
        <Col>
          <FakeAdvert/>
         </Col>
      </Row>
    </div>

  )}

export default Home;
