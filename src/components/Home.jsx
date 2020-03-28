import React from "react";
import Header from "./Header";
import FakeArticle from "./FakeArticle";
import AdvertList from "./AdvertList";

import Columns from 'react-columns';


function Home(){

  var queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }];

  return (
    <div >
      <Header/>
      <div className='row'>
        <Columns queries={queries}>
          <FakeArticle/>
          <AdvertList/>
         </Columns>
      </div>
    </div>

  )}

export default Home;
