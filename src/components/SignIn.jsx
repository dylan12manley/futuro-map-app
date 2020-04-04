import React from "react";
import firebase from "firebase/app";
import { Link } from "react-router-dom";

function SignIn(){

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      window.alert("successfully signed up!");
    }).catch(function(error) {
      window.alert(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      window.alert("Successfully signed in!");
    }).catch(function(error) {
      window.alert(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      window.alert("Successfully signed out!");
    }).catch(function(error) {
      window.alert(error.message);
    });
  }

      return (
        <div>
          <h1><Link to="/admin" >Admin Page?</Link></h1>
          <h1>Sign up</h1>
          <form onSubmit={doSignUp}>
            <input
              type='text'
              name='email'
              placeholder='email' />
            <input
              type='password'
              name='password'
              placeholder='Password' />
            <button type='submit'>Sign up</button>
          </form>
          <h1>Sign In</h1>
          <form onSubmit={doSignIn}>
            <input
              type='text'
              name='signinEmail'
              placeholder='email' />
            <input
              type='password'
              name='signinPassword'
              placeholder='Password' />
            <button type='submit'>Sign in</button>
          </form>
          <h1>Sign Out</h1>
          <button onClick={doSignOut}>Sign out</button>
        </div>
      );

  }

export default SignIn
