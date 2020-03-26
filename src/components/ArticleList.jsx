import React from "react";
import Article from "./Article";


function ArticleList(){

  const articleListStyle = {
    paddingTop: '100px',
    backgroundColor: '#DDCFCE',
    color: '#38171C',
    margin: 'calc(8px + 2.5vmin)',
  }

  return (
    <div style={articleListStyle}>
      <Article/>
    </div>
  );
}

export default ArticleList;
