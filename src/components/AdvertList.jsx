import React from "react";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Advert from "./Advert";

function AdvertList(props){
  useFirestoreConnect([
    { collection: 'adverts' }
  ]);
  const adverts = useSelector(state => state.firestore.ordered.adverts);
  if (isLoaded(adverts)) {
    return (
      <>
      <div>
        {Object.values(adverts).map((advert) => {
          return <Advert
            title={advert.title}
            redirectUrl={advert.redirectUrl}
            img={advert.img}
            alt={advert.alt}
            id={advert.id}
            key={advert.id}/>
        })}
      </div>
      </>
    );
  } else if (isEmpty) {
    return( 
      <div>
        <p>No Adverts, Money Isn't Real Anyway.
        </p>
      </div>
    )
  } else 
    return (
      <React.Fragment>
        <p>Randomly hearing your favorite song on the radio is more satisfying than playing it directly from your ipod.</p>
        <p>Ever think about that?</p>
        <p>Or how about: "Go to bed, you'll feel better in the morning" is the human version of "Did you turn it off and turn it back on again?"</p>
        <p>Sorry for the wait, just wanted to provide some ideas for time pass while this is</p>
        <h3>LOADING...</h3>
      </React.Fragment>
    );
}


  export default AdvertList;
