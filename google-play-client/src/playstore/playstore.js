import React from 'react';


const Playstore = (props) => {
  return (
    <div className="app">
      <h2>{ props.app }</h2>
      <div className="app-rating"> { props.rating }</div>
      <div className="app-genres"> { props.genres }
      </div>
      <div className="app-type">{ props.type }</div>
    </div>
  );
}

export default Playstore;