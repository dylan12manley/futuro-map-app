import React from "react";
import Article from "./Article";

import kenith from './../assets/images/kenith.jpg';
import tyler from './../assets/images/tyler.jpg';
import soul from './../assets/images/savageSoul.jpeg';
import stephen from './../assets/images/stephen1.jpg';
import rick from './../assets/images/RickFuturo.jpg';

const articleStyle = {
  marginTop: '55px',
  padding: 'calc(8px + 1vmin)',
  color: '#38171C',
}

const articleList = [
  {
    title: 'Why is Rick so Sick, for Real tho?',
    author: 'Joey P',
    date: 'Febuary 19, 2020',
    headline: "YO , look Rick and Michelle are like Futuro's  favorite people besides Elon and Grimes lol. Wait Why? Because self actualization isn't even a fucking thought...",
    body: "YO , look Rick and Michelle are like Futuro's  favorite people besides Elon and Grimes lol. Wait Why? Because self actualization isn't even a fucking thought , It just is mothafuckafucking thing. Like just waking up , opening your eyes and just doing shit , no negative self talk , no barriers , no fucks given.",
    mainImg: rick,
    catagory: 'People',
    id: '1',
  },
  {
    title: 'Kenneth Cappello’s Photography is Flithy',
    author: 'Joey P',
    date: 'Febuary 19th, 2020',
    headline: 'Kenneth Cappelo’s photography makes me feel a certain type of way , I think its the way he captures the artist in there natural essence but also makes them look dope as fuck.',
    body: 'Kenneth Cappelo’s photography makes me feel a certain type of way , I think its the way he captures the artist in there natural essence but also makes them look dope as fuck. You have have cunt’s take lame pictures of you because they be kinda hating on the Low lol , That’s not Kenneth Cappelo , he’s def not a hater with camera.',
    mainImg: kenith,
    catagory: 'Film',
    id: '2'
  },
  {
    title: 'Stephen Gibbs Brain is Melting',
    author: 'Joey P',
    date: 'Febuary 19th, 2020',
    headline: 'Is it me or is Stephen Gibbs really into Psychedelics or maybe he’s just a trippy dude but either way his work has a fucking place here.',
    body: 'Is it me or is Stephen Gibbs really into Psychedelics or maybe he’s just a trippy dude but either way his work has a fucking place here.  The fact that him and the Homey trippy Redd hooked up for and album cover is ridiculously cool and trippy unto itself. These first few artist that we feature in Art now where not going to say too much about because there work speaks fr itself. Have a tab , put on some Nicholas Jarr and watch his world come to life.',
    mainImg: stephen,
    catagory: 'Art',
    id: '3',
  },
  {
    title: 'Savage Seoul, Skoot Designer MLMA @melovemealot',
    author: 'Joey P',
    date: 'Febuary 20th, 2020',
    headline: 'We here at Futuro loves us some street wear , and we also understand that every cunt and there momma is a streetwear designer of artist.',
    body: 'We here at Futuro loves us some street wear , and we also understand that every cunt and there momma is a streetwear designer of artist. So in saying that its hard to stand out from the pack. Well MLMA from Korea has done just that. Her dragon ball Z , Kung fu , Anime inspired gear is pretty sick. We aint gonna give her to many words but just enough to say we see you. Outtie 5000 G.',
    mainImg: soul,
    catagory: 'Fashion',
    id: '4',
  },
  {
    title: 'Fourth Story Title',
    author: 'Fourth Author',
    date: 'March 2nd, 2020',
    headline: 'This is a story teaser. It could be a brief description of the article or a just the first couple senteneces.',
    body: 'This is a story body.',
    mainImg: tyler,
    catagory: 'People',
    id: '5',
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
            mainImg={article.mainImg}
            category={article.category}
            id={article.id}
            key={article.id}/>
        })}
      </div>

    </>
  );
}

export default FakeArticle;
