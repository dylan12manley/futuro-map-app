import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase'

function NewAdvertForm(props){

  const formStyle = {
    backgroundColor: '#183023',
    color: '#8E545E',
    height: '100vh',
    fontFamily: 'Black Ops One'
  }
  const firestore = useFirestore();

  function addAdvertToFirestore(event) {
    event.preventDefault();
    props.onNewAdvertCreation();
    return firestore.collection('tickets').add(
      {
        image: event.target.image.value,
        advertUrl: event.target.advertUrl.value,
      }
    );
  }

  return (
      <div style={formStyle}>
        <form onSubmit={addAdvertToFirestore}>
          <input
            type='string'
            name='advertImage'
            placeholder='Image'/>
         <input
            type='text'
            name='advertUrl'
            placeholder='Url for advertisment website'/>
          <button type='submit'>Add Advert</button>
        </form>
      </div>
    );
  }

  NewAdvertForm.propTypes = {
    onNewAdvertCreation: PropTypes.func
  };

  export default NewAdvertForm;