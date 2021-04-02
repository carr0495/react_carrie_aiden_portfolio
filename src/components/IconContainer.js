import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import {
  SiJavascript,
  SiReact,
  SiCss3,
  SiHtml5,
  SiAdobexd,
} from "react-icons/si";
import "./IconContainer.css";

function IconContainer(props) {
  return (
    <div className="mainIconContainer">
      {props.github ? (
        <div className="iconContainer">
          <VscGithubInverted size={props.size} color={props.color} />
          <p>{props.github}</p>
        </div>
      ) : null}
      {props.javascript ? (
        <div className="iconContainer">
          <SiJavascript size={props.size} color={props.color} />
          <p>{props.javascript}</p>
        </div>
      ) : null}
      {props.react ? (
        <div className="iconContainer">
          <SiReact size={props.size} color={props.color} />
          <p>{props.react}</p>
        </div>
      ) : null}
      {props.css ? (
        <div className="iconContainer">
          <SiCss3 size={props.size} color={props.color} />
          <p>{props.css}</p>
        </div>
      ) : null}
      {props.html ? (
        <div className="iconContainer">
          <SiHtml5 size={props.size} color={props.color} />
          <p>{props.html}</p>
        </div>
      ) : null}
      {props.adobeXD ? (
        <div className="iconContainer">
          <SiAdobexd size={props.size} color={props.color} />
          <p>{props.adobeXD}</p>
        </div>
      ) : null}
    </div>
  );
}
export default IconContainer;
