import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Home from "./Home";
import SignIn from "./SignIn";
import Landing from './pages/Landing';
import Error404 from './Error404';
import Admin from './Admin';
import NewArticleForm from './forms/NewArticleForm';
import NewAdvertForm from './forms/NewAdvertForm';
import NewCarouselItemForm from './forms/NewCarouselForm';
import ArticleList from './ArticleList';
import Art from './pages/ArtPage';
import Fashion from './pages/FashionPage';
import Film from './pages/FilmPage';
import People from './pages/PeoplePage';
import Sound from './pages/SoundPage';
import ArticleX from './shared/ArticleX';

const appStyle = {
  backgroundColor: '#F3F7F2',
  color: '#1C0B0D',
  width: '100%',
  fontFamily: 'Montserrat Subrayada',
}

class App extends React.Component {



  // handleEditingArticleInList = (articleToEdit) => {
  //   const { dispatch } = this.props;
  //   const { title, headline, body, author, date, category, mainImg, id } = articleToEdit;
  //   const action = a.addArticle(articleToEdit);
  //   dispatch(action);
  // }

  handleDeletingArticle = (id) => {
   this.props.firestore.delete({collection: 'articles', doc: id});
 }

  render(){
    return (
      <div style={appStyle}>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/signin" component={SignIn} />
          <Route path="/home" component={Home} articleList={this.props.articleList}/>
          <Route path="/newArticle" component={ArticleList} articleList={this.props.articleList}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/NewArticleForm" component={NewArticleForm} />
          <Route path="/addad" component={NewAdvertForm} />
          <Route path="/NewCarouselItemForm" component={NewCarouselItemForm} />
          <Route path="/art" component={Art} />
          <Route path="/fashion" component={Fashion} />
          <Route path="/film" component={Film} />
          <Route path="/people" component={People} />
          <Route path="/sound" component={Sound} />
          <Route path="/articlex" component={ArticleX} />
        </Switch>
          <Route component={Error404} />
      </Router>
      </div>
    );
  }
}

App.propTypes = {
  articleList: PropTypes.object,
  advertList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    articleList: state
  }
}

App = connect(mapStateToProps)(App);

export default App;
