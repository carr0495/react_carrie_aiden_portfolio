import React from "react";
import { TwoColImgDesc } from "../components";
import aboutPic from "../assets/main.jpg";

function AboutPage(props) {
  return (
    <>
      <TwoColImgDesc
        header="About Me"
        description="Love learning new technology and frameworks. Always adding new little projects to my Github. Graduate of the Game Development program at Algonquin College and will graduate from the Mobile Application Design and Development program in April 2021. Looking forward to joining a team of like minded techies! Currently playing around with TypeScript."
        source={aboutPic}
        // flipped={true}
        linkName="LinkedIn"
        link="https://www.linkedin.com/in/aiden-carrie/"
      />
    </>
  );
}
export default AboutPage;
