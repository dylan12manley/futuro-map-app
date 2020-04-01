import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Article from "./Article";

function ArticleList(props){

  const articleStyle = {
    marginTop: '55px',
    padding: 'calc(8px + 1vmin)',
    color: '#38171C',
  }

  useFirestoreConnect([
    { collection: 'articles' }
  ]);

  const articles = useSelector(state => state.firestore.ordered.articles);

  if (isLoaded(articles)) {
    return (
      <>
      <div style={articleStyle}>
        {Object.values(props.articleList).map((article) => {
          return <Article
            title={article.title}
            headline={article.headline}
            body={article.body}
            author={article.author}
            date={article.date}
            category={article.category}
            mainImage={mainIMage}
            id={article.id}
            key={article.id}/>
        })}
      </div>
      </>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }

}



export default ArticleList;

