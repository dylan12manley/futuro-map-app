import React from "react";
import { useFirestore } from 'react-redux-firebase';
import { Link } from "react-router-dom";

function NewArticleForm(props){

  const firestore = useFirestore();

  const formStyle = {
    backgroundColor: '#183023',
    color: '#8E545E',
    height: '100vh',
    fontFamily: 'Black Ops One'
  }

  const linkStyle = {
    paddingTop: '4vh',
    textAlign: 'center',
    color: '#8E545E',
  }

  function addArticleToFirestore(event) {
    event.preventDefault();
    console.log('article added')
    return firestore.collection('articles').add(
      {
        title: event.target.title.value,
        author: event.target.author.value,
        date: event.target.date.value,
        headline: event.target.headline.value,
        body: event.target.body.value,
        category: event.target.category.value,
        mainImg: event.target.mainImg.value
      }
    );
  }

  return (
      <div style={formStyle}>
        <form onSubmit={addArticleToFirestore}>
          <input
            type='text'
            name='title'
            placeholder='Title' />
          <input
            type='text'
            name='author'
            placeholder='Author' />
          <input
            type='text'
            name='date'
            placeholder='Date' />
          <textarea
            type='text'
            name='headline'
            placeholder='Headline' />
          <textarea
            name='body'
            placeholder='Content Body' />
          <input
            type='text'
            name='category'
            placeholder='Category' />
          <input
            type='file'
            name='mainImg'
            placeholder='Main Image' />
          <button type='submit'>Add Article</button>
        </form>
        <div style={linkStyle}>
          <Link to="/admin" >Admin Page</Link>
          <br></br>
          <Link to="/home" >Home</Link>
        </div>
      </div>
    );
  }


  export default NewArticleForm;
