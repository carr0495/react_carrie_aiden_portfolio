import React from "react";
import "./CardContainer.css";
function CardContainer(props) {
  return (
    <div className="cardContainer">
      <div className="headerContainer">
        <img />
        <h1>{props.title}</h1>
      </div>
      <div>
        <h2>{props.header}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
export default CardContainer;
