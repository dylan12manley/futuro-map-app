import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

import Home from "./Home";
import SignIn from "./SignIn";
import LandingPage from './LandingPage';
import Error404 from './Error404';
import NewArticleForm from './NewArticleForm';
import ArticleList from './ArticleList';
import Advert from './Advert';

const appStyle = {
  backgroundColor: '#F3F7F2',
  color: '#1C0B0D',
  width: '100%',
  fontFamily: 'Montserrat Subrayada',
}

class App extends React.Component {

  handleAddingNewArticleToList = (newArticle) => {
    const { dispatch } = this.props;
    const { title, headline, body, author, date, category, mainImg, id  } = newArticle;
    const action = a.addArticle(newArticle);
    dispatch(action);
  }

  handleEditingArticleInList = (articleToEdit) => {
    const { dispatch } = this.props;
    const { title, headline, body, author, date, category, mainImg, id } = articleToEdit;
    const action = a.addArticle(articleToEdit);
    dispatch(action);
  }

  handleDeletingArticle = (id) => {
   const { dispatch } = this.props;
   const action = a.deleteArticle(id);
   dispatch(action);
 }

  render(){
    return (
      <div style={appStyle}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/signin" component={SignIn} />
          <Route path="/home" component={Home} articleList={this.props.articleList}/>
          <Route path="/newArticle" component={ArticleList} articleList={this.props.articleList}/>
          <Route path="/ads" component={Advert}/>
          <Route path="/NewArticleForm" component={NewArticleForm} onNewArticleCreation={this.handleAddingNewArticleToList} />
          <Route component={Error404} />
        </Switch>
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
