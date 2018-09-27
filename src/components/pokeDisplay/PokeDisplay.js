import React from "react";
import "./pokeDisplay.css";

export default function({name1, image1}) {
  console.log('poke display: ', image1, name1)
  return (
    <div className="user-display--component">
      <div>
        <p> {name1}</p>
        <img src={image1} alt="image-url_goes_here" />
      </div>
    </div>
  );
}
