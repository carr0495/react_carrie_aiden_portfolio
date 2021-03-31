import React from "react";
import { CardContainer, TwoColImgDesc } from "../components";
import yelp from "../assets/yelp.png";
import weather from "../assets/weather.png";
import eventi from "../assets/eventi.png";
import probot from "../assets/probot.png";
import rately from "../assets/rately.png";
function HomePage(props) {
  return (
    <>
      <TwoColImgDesc
        header="Yelp Clone"
        description="Application built in React Native, fetching data from the yelp API. Uses geolocation to find your current location. Worked in a team of 2 with a paired programming development style."
        source={yelp}
        flipped={true}
        linkName="github"
        link="https://github.com/carr0495/mad9135-f20-p2-react-native-yelp"
      />
      <TwoColImgDesc
        header="Rately PWA"
        description="Progressive Web App created in React JS and deployed using Netlify. Worked in a team of 2 with a paired programming development style. "
        source={rately}
        // flipped={true}
        linkName="See it"
        link="https://5fc532a52f7a6b0f908b1860--jolly-hypatia-1925f8.netlify.app/"
      />
      <TwoColImgDesc
        header="Robotic Process Automation"
        description="Collaborated on creating a Robot Process for sanitizing classified documentation to an unclassified state. Our Client was the Communications Security Establishment. We used the UiPath framework to complete this bot."
        source={probot}
        flipped={true}
        linkName="YouTube"
        link="https://www.youtube.com/watch?v=ySIMdIWgZKg"
      />
      <TwoColImgDesc
        header="Weather Site"
        description="Web application build with OpenWeather API, Geolocation and Google auto-complete. I added functionality where the background dynamically changes to different videos based on the weather of the searched location. Designed with a mobile first mentality in pure JavaScript"
        source={weather}
        // flipped={true}
        linkName="See it"
        link="https://carr0495.github.io/mad9135-c1-html5-weather/"
      />
      <TwoColImgDesc
        header="Eventi Design"
        description="Design created for an Event application build in Adobe XD. Full Design process followed, defined the problem, collected data via online survey and interviews. Created personas and usage scenarios then had prototype testing with a round of students."
        source={eventi}
        flipped={true}
        linkName="Prototype"
        link="https://xd.adobe.com/view/145108c8-d8ef-4d92-b216-4dca83b3539f-4102/"
      />
      <CardContainer GithubUsername={"carr0495"} />
    </>
  );
}
export default HomePage;
