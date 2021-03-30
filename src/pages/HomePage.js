import React from "react";
import { CardContainer, TwoColImgDesc } from "../components";
import yelp from "../assets/yelp.png";
import weather from "../assets/weather.png";
import eventi from "../assets/eventi.png";
function HomePage(props) {
  return (
    <>
      <TwoColImgDesc
        header="Yelp Clone"
        description="Application built in React Native, fetching data from the yelp API. Uses geolocation to find your current location. "
        source={yelp}
        flipped={true}
      />
      <TwoColImgDesc
        header="Weather Site"
        description="Web application build with OpenWeather API, Geolocation and Google auto-complete. I added functionality where the background dynamically changes to different videos based on the weather of the searched location."
        source={weather}
        // flipped={true}
      />
      <TwoColImgDesc
        header="Eventi Design"
        description="Design created for an Event application build in Adobe XD."
        source={eventi}
        flipped={true}
      />
      <CardContainer GithubUsername={"carr0495"} />
    </>
  );
}
export default HomePage;
