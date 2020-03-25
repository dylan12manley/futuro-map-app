import React from "react";
// import PropTypes from "prop-types";
import Card from "react-bootstrap/Card"
import kenith from './../assets/images/kenith.jpg';
import rick from './../assets/images/RickFuturo.jpg';

const articleStyle = {
  color: '#38171C',
  margin: 'calc(8px + 2.5vmin)'
}

const articleList = [
  {
    title: 'Why is Rick so Sick, for Real tho?',
    author: 'Joey P',
    publishDate: 'Febuary 19, 2020',
    articleTeaser: "YO , look Rick and Michelle are like Futuro's  favorite people besides Elon and Grimes lol. Wait Why? Because self actualization isn't even a fucking thought...",
    articleBody: "YO , look Rick and Michelle are like Futuro's  favorite people besides Elon and Grimes lol. Wait Why? Because self actualization isn't even a fucking thought , It just is mothafuckafucking thing. Like just waking up , opening your eyes and just doing shit , no negative self talk , no barriers , no fucks given.",
    mainImage: rick,
    catagory: 'People',
    id: 1,
    mainImg: rick
  },
  {
    title: 'Kenneth Cappello’s Photography is Flithy',
    author: 'Joey P',
    publishDate: 'Febuary 19th, 2020',
    articleTeaser: 'Kenneth Cappelo’s photography makes me feel a certain type of way , I think its the way he captures the artist in there natural essence but also makes them look dope as fuck.',
    articleBody: 'Kenneth Cappelo’s photography makes me feel a certain type of way , I think its the way he captures the artist in there natural essence but also makes them look dope as fuck. You have have cunt’s take lame pictures of you because they be kinda hating on the Low lol , That’s not Kenneth Cappelo , he’s def not a hater with camera.',
    mainImg: kenith,
    catagory: 'Film',
    id: 2
  }
]

function Article(){
  return (
    <div style={articleStyle}>
      <h3>thissa Article</h3>
      <h3></h3>
      <h5>authorrd</h5>
      <p><em>thissa body or something maby a summary</em></p>


      <div className="articleFeed">
        <div className="articlesAvailableDiv">
          {articleList.map((article, id) =>
            <div key={id}>
            <Card className="cardClass">
            <div className='cardHeader'>
              <h4 className='cardTitle'>{article.title}</h4>
              <h6 className='cardTitleB'>{article.author}<span className='publishDate'>{article.publishDate}</span></h6>
            </div>
            <div className="cardImg">
              <Card.Img className="cardImgImg" src={article.mainImg} alt="The article's main image." />
            </div>
              <Card.Text className="articleSubtitle">
                <p className='ArticleTeaserOnCard'> {article.articleTeaser}</p>
              </Card.Text>
            </Card>
            <hr></hr>
            </div>
          )
        }
        </div>
      </div>
    </div >
  );
}

export default Article;
