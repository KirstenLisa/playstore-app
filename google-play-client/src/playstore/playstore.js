import React from 'react';


const Playstore = (props) => {
  return (
    <div className="app">
      <h2>{ props.App }</h2>
      <div className="app-rating"> { props.Rating }</div>
      <div className="app-genres"> { props.Genres }
      </div>
      <div className="app-type">{ props.type }</div>
    </div>
  );
}

export default Playstore;