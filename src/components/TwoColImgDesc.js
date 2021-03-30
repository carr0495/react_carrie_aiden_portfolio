import React from "react";
import "./TCID.css";
function TwoColImgDesc(props) {
  if (props.flipped) {
    return (
      <div className="mainContainer">
        <div className="descriptionContainer">
          <h3>{props.header}</h3>
          <p>{props.description}</p>
          <a>{props.linkName}</a>
        </div>
        <div className="imageContainer">
          <img src={props.source} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="mainContainer">
        <div className="imageContainer">
          <img src={props.source} />
        </div>
        <div className="descriptionContainer">
          <h3>{props.header}</h3>
          <p>{props.description}</p>
          <a>{props.linkName}</a>
        </div>
      </div>
    );
  }
}
export default TwoColImgDesc;
