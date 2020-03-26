import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Home from "./Home";
import SignIn from "./SignIn";
import Error404 from './Error404';

const appStyle = {
  backgroundColor: '#F3F7F2',
  color: '#1C0B0D',
  width: '100%',
  fontFamily: 'Montserrat Subrayada',
}

class App extends React.Component {

  handleAddingNewArticleToList = (newArticle) => {
    const { dispatch } = this.props;
    const { title, headline, body, author, date, category, id  } = newArticle;
    const action = {
      type: 'ADD_ARTICLE',
      title: title,
      headline: headline,
      body: body,
      author: author,
      date: date,
      category: category,
      id: id,
    }
    dispatch(action);
  }

  handleEditingArticleInList = (articleToEdit) => {
    const { dispatch } = this.props;
    const { title, headline, body, author, date, category, id } = articleToEdit;
    const action = {
      type: 'ADD_ARTICLE',
      title: title,
      headline: headline,
      body: body,
      author: author,
      date: date,
      category: category,
      id: id,
    }
    dispatch(action);
  }

  handleDeletingArticle = (id) => {
   const { dispatch } = this.props;
   const action = {
     type: 'DELETE_ATRICLE',
     id: id
   }
   dispatch(action);
 }

  render(){
    return (
      <Router style={appStyle}>
        <div >
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/" component={Home} />
        </Switch>
       </div>
      </Router>
    );
  }
}

App.propTypes = {
  articleList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    articleList: state
  }
}

App = connect(mapStateToProps)(App);

export default App;
