import React from "react";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function EditArticleForm (props) {
  const firestore = useFirestore();

  const { article } = props;

  function handleEditArticleFormSubmission(event) {
    event.preventDefault();
    const propertiesToUpdate = {
        title: event.target.title.value,
        author: event.target.author.value,
        date: event.target.date.value,
        headline: event.target.headline.value,
        body: event.target.body.value,
        category: event.target.category.value,
        mainImg: event.target.mainImg.value
    }
    return firestore.update({collection: 'articles', doc: article.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditArticleFormSubmission}
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}


export default EditArticleForm;