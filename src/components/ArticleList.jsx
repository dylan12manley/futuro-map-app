import React from "react";
import PropTypes from "prop-types";
import Article from "./Article";

function ArticleList(props){

  return (
    <>
    <div>
      {Object.values(props.articleList).map((article) => {
        return <Article
          title={article.title}
          headline={article.headline}
          body={article.body}
          author={article.author}
          date={article.date}
          category={article.category}
          id={article.id}
          key={article.id}/>
      })}
    </div>
    </>
  );
}

ArticleList.propTypes = {
  articleList: PropTypes.object
}

export default ArticleList;

