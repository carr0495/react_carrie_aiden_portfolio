import React from "react";
function CircleImage(props) {
  return (
    <div
      style={{
        position: "relative",
        width: props.circleSize,
        height: props.circleSize,
        overflow: "hidden",
        borderRadius: "50%",
        boxShadow: "0 5px 5px rgba(0, 0, 0, 0.432)",
      }}
    >
      <img
        src={props.src}
        alt={props.alt}
        style={{
          display: "inline",
          padding: 0,
          margin: 0,
          width: "100%",
          //   height: "100%",
        }}
      />
    </div>
  );
}
export default CircleImage;
