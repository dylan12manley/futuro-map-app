import React from "react";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Article from "./Article";

function ArticleList() {

  useFirestoreConnect([
    { collection: 'articles' }
  ]);

  const articles = useSelector(state => state.firestore.ordered.articles);

  if (isLoaded(articles)) {
    return (
      <>
        {Object.values(articles).map((article) => {
          return <Article
            title={article.title}
            headline={article.headline}
            body={article.body}
            author={article.author}
            date={article.date}
            category={article.category}
            mainImg={article.mainImg}
            id={article.id}
            key={article.id}/>
        })}
      </>
    );
  } else if (isEmpty) {
      return( 
        <div>
          <p>No Articles Added Yet
          </p>
        </div>
      )
    } 
  return (
    <React.Fragment>
      <h3>Loading...</h3>
    </React.Fragment>
  );
  
}




export default ArticleList;