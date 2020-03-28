import React from "react";
import Header from "./Header";
import FakeArticle from "./FakeArticle";
import Advert from "./Advert";


function Home(){
  return (
    <div >
      <Header/>
      <div className='row'>
        <div className='column'>
          <FakeArticle/>
        </div>
        <div className='column'>
          <Advert/>
        </div>
      </div>
    </div>

  )}

export default Home;
