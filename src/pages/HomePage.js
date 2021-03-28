import React from "react";
import { CircleImage, CardContainer } from "../components";
import profile from "../assets/main.jpg";
function HomePage(props) {
  return (
    <>
      <CircleImage src={profile} circleSize={"100px"} />
      <CardContainer title={"something"} />
    </>
  );
}
export default HomePage;
