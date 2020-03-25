import React from "react";
import Article from "./Article";


function ArticleList(){

  const articleListStyle = {
    backgroundColor: '#DDCFCE',
    color: '#38171C',
    padding: 'calc(8px + 2.5vmin)'
  }

  return (
    <div >
      <Article style={articleListStyle}/>
    </div>
  );
}

export default ArticleList;
