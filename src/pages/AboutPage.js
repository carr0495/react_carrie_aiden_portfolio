import React from "react";
import { TwoColImgDesc, IconContainer } from "../components";
import aboutPic from "../assets/main.jpg";

function AboutPage(props) {
  return (
    <>
      <TwoColImgDesc
        header="About Me"
        description="Hello! I started my development journey back in 2010 when I tried creating a pokemon clone using Turing. This lead me to get my Advanced Diploma in Game Development from Algonquin College, where I specialized in Game Art. After graduating in 2019, I decided to polish up my programming skills by getting another Diploma, this time in Mobile Application Design and Development; where I will graduate in April 2021. During this program, I have had the opportunity to earn the position of Program Assistant, helping first year students learn JavaScript, CSS, HTML, Git and more. Another position I earned is with Algonquin in their Social Innovation Lab, where I spearheaded a project involving automating a booking system and assisted with UX on other projects."
        source={aboutPic}
        // flipped={true}
        linkName="LinkedIn"
        link="https://www.linkedin.com/in/aiden-carrie/"
      />
      {/* <IconContainer
        size={55}
        color={"orange"}
        github={"github"}
        javascript={"javascript"}
        react={"react"}
        css={"css"}
        html={"html"}
      /> */}
    </>
  );
}
export default AboutPage;
