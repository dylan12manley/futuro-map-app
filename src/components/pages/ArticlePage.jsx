import React from "react";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Article from "./shared/Article";

function ArticlePage() {
  useFirestoreConnect([
    { collection: 'articles' }
  ]);
  const articles = useSelector(state => state.firestore.ordered.articles);
  if (isLoaded(articles)) {
    return (
      <div style={{ marginTop: '55px', padding: 'calc(8px + 1vmin)', color: '#38171C'}}>
        {Object.values(articles).map((article) => {
          return <Article
            title={article.title}
            headline={article.headline}
            body={article.body}
            author={article.author}
            date={article.date}
            category={article.category}
            mainImg={article.mainImg}
            img2={article.img2}
            id={article.id}
            key={article.id}/>
        })}
      </div>
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
      <p>Randomly hearing your favorite song on the radio is more satisfying than playing it directly from your ipod.</p>
      <p>Ever think about that?</p>
      <p>Or how about: "Go to bed, you'll feel better in the morning" is the human version of "Did you turn it off and turn it back on again?"</p>
      <p>Sorry for the wait, just wanted to provide some ideas for time pass while this is</p>
      <h3>LOADING...</h3>
    </React.Fragment>
  );
  
}




export default ArticlePage;