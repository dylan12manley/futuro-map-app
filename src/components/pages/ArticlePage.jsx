import React from "react";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import ArticleFull from "../shared/ArticleFull";
import { Card, Icon, Image } from 'semantic-ui-react'
function ArticlePage() {
  useFirestoreConnect([
    { collection: 'articles' }
  ]);
  const articles = useSelector(state => state.firestore.ordered.articles);
  if (isLoaded(articles)) {
    return (
      <div style={{ marginTop: '55px', padding: 'calc(8px + 1vmin)', color: '#38171C'}}>
        {Object.values(articles).map((article) => {
          return <ArticleFull
            title={article.title}
            headline={article.headline}
            p1={article.p1}
            p2={article.p2}
            p3={article.p3}
            p4={article.p4}
            p5={article.p5}
            p6={article.p6}
            author={article.author}
            date={article.date}
            category={article.category}
            mainImg={article.mainImg}
            img2={article.img2}
            img3={article.img3}
            img4={article.img4}
            img5={article.img5}
            img6={article.img6}
            img7={article.img7}
            img8={article.img8}
            img9={article.img9}
            id={article.id}
            key={article.id}/>
        })}
      </div>
    );
  } else if (isEmpty) {
      return( 
        <div>
            <p>Randomly hearing your favorite song on the radio is more satisfying than playing it directly from your ipod.</p>
            <p>Ever think about that?</p>
            <p>Or how about: "Go to bed, you'll feel better in the morning" is the human version of "Did you turn it off and turn it back on again?"</p>
            <p>Sorry for the wait, just wanted to provide some ideas for time pass while this is</p>
            <h3>LOADING...</h3>
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