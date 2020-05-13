import React from "react";
import "./flowers.css";

const flowerCards = props => (
  <div className="card" onClick={() => props.clickedImage(props.id)}>
    <div className="img-container">
      <img alt={''} src={props.image} />
    </div>
  </div>
);

export default flowerCards;