import React from "react";
import "./TCID.css";
import { IconContainer } from "./";

// const IconContainer = lazy(() => import("./IconContainer"));
function TwoColImgDesc(props) {
  if (props.flipped) {
    return (
      <div className="mainContainer">
        <div className="descriptionContainer">
          <h3>{props.header}</h3>
          <p>{props.description}</p>
          <a href={props.link}>{props.linkName}</a>
          <IconContainer
            size={props.size}
            color={props.color}
            github={props.github}
            javascript={props.javascript}
            react={props.react}
            css={props.css}
            html={props.html}
            adobeXD={props.adobeXD}
          />
        </div>
        <div className="imageContainer">
          <img src={props.source} alt={props.imageAlt} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="mainContainer">
        <div className="imageContainer">
          <img src={props.source} alt={props.imageAlt} />
        </div>

        <div className="descriptionContainer">
          <h3>{props.header}</h3>
          <p>{props.description}</p>
          <a href={props.link}>{props.linkName}</a>
          <IconContainer
            size={props.size}
            color={props.color}
            github={props.github}
            javascript={props.javascript}
            react={props.react}
            css={props.css}
            html={props.html}
            adobeXD={props.adobeXD}
          />
        </div>
      </div>
    );
  }
}
export default TwoColImgDesc;
