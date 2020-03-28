import React from "react";
import Article from "./Article";
import kenith from './../assets/images/kenith.jpg';
import rick from './../assets/images/RickFuturo.jpg';

const articleStyle = {
  marginTop: '50px',
  padding: 'calc(8px + 1vmin)',
  color: '#38171C',
  fontFamily: 'Bungee',
}

const articleList = [
  {
    title: 'Why is Rick so Sick, for Real tho?',
    author: 'Joey P',
    publishDate: 'Febuary 19, 2020',
    headline: "YO , look Rick and Michelle are like Futuro's  favorite people besides Elon and Grimes lol. Wait Why? Because self actualization isn't even a fucking thought...",
    articleBody: "YO , look Rick and Michelle are like Futuro's  favorite people besides Elon and Grimes lol. Wait Why? Because self actualization isn't even a fucking thought , It just is mothafuckafucking thing. Like just waking up , opening your eyes and just doing shit , no negative self talk , no barriers , no fucks given.",
    mainImage: rick,
    catagory: 'People',
    id: 1,
  },
  {
    title: 'Kenneth Cappello’s Photography is Flithy',
    author: 'Joey P',
    publishDate: 'Febuary 19th, 2020',
    headline: 'Kenneth Cappelo’s photography makes me feel a certain type of way , I think its the way he captures the artist in there natural essence but also makes them look dope as fuck.',
    articleBody: 'Kenneth Cappelo’s photography makes me feel a certain type of way , I think its the way he captures the artist in there natural essence but also makes them look dope as fuck. You have have cunt’s take lame pictures of you because they be kinda hating on the Low lol , That’s not Kenneth Cappelo , he’s def not a hater with camera.',
    mainImg: kenith,
    catagory: 'Film',
    id: 2
  }
]

function FakeArticle(){
  return (
    <>
      <div style={articleStyle}>
        {Object.values(articleList).map((article) => {
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

export default FakeArticle;
