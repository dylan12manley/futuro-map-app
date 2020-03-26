import React from "react";
import { v4 } from 'uuid'

function NewTicketForm(){

  const formStyle = {
    backgroundColor: '#183023',
    color: '#8E545E',
    height: '100vh',
    fontFamily: 'Black Ops One'
  }

  function handleNewArticleFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.title.value);
  }

  return (
      <div style={formStyle}>
        <form onSubmit={handleNewTicketFormSubmission}>
          <input
            type='text'
            name='title'
            placeholder='Title' />
          <textarea
            type='text'
            name='headline'
            placeholder='Headline' />
          <textarea
            name='body'
            placeholder='Content Body' />
          <button type='submit'>Add Article</button>
        </form>
      </div>
    );
  }
