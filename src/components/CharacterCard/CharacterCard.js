import React from "react";
import "./CharacterCard.css";
import Thumbnail from "../Thumbnail";

const CharacterCard = props => (
  <div className="card">
    <div className="img-container" id={props.id} onClick={() => {props.handleClick(props)}}>
      {/* <img src={props.image} /> */}
      <Thumbnail src={props.image} />
    </div>
    
  </div>
);

export default CharacterCard;
