import React from "react";
import Header from "./Header";
import FakeArticle from "./FakeArticle";
import FakeAdvert from "./Advert";



function Home(){

  return (
    <div >
      <Header/>
      <div className='row'>
        <div className='column' md={9}>
          <FakeArticle/>
        </div>
        <div className='column' md={3}>
          <FakeAdvert/>
        </div>
      </div>
    </div>

  )}

export default Home;
