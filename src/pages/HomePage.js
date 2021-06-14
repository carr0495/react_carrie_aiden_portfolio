import React, { lazy, Suspense } from "react";
import { CardContainer } from "../components";
import yelp from "../assets/yelp.png";
import storkit from "../assets/storkit.png";
import moodle from "../assets/moodle.png";
import weather from "../assets/weather.png";
import eventi from "../assets/eventi.png";
import probot from "../assets/probot.png";
import rately from "../assets/rately.png";

const TwoColImgDesc = lazy(() => import("../components/TwoColImgDesc"));
function HomePage(props) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TwoColImgDesc
          header="Stotkit"
          description="Storkit is a personal project created to learn GraphQL. I created the backend and frontend from scratch using Apollo-GraphQL and React JS. I really enjoyed building the api using GraphQL because of its ability to use playground and self document. This app offers the functionality to register, login, like posts, delete your own posts and comment on posts. For the styling I decided to use Neumorphism techniques."
          source={storkit}
          flipped={true}
          linkName="github"
          link="https://github.com/carr0495/storkit-fe"
          size={25}
          color={"#d92728"}
          // github={"Github"}
          // javascript={"JavaScript"}
          react={"React JS"}
          css={"CSS"}
          // html={"html"}
        />
        <TwoColImgDesc
          header="Moodle App"
          description="This is my current project through my employment with Premergency. I have been tasked with taking the organizations existing plugins and make them PWA compatible thorugh the Moodle App. One challenge so far is learning PHP as the main development language and mustache templating for the front-end. The code for this project cannot be distributed due to an NDA. So far I have made two internal plugins mobile compatible and will soon work on building on top of moodles source code to build a branded custom version of the moodle app to be released on Android and IOS."
          source={moodle}
          // flipped={true}
          // linkName="github"
          // link="https://github.com/carr0495/mad9135-f20-p2-react-native-yelp"
          size={25}
          color={"#FC7D31"}
          // github={"Github"}
          // javascript={"JavaScript"}
          // react={"React Native"}
          // css={"CSS"}
          // html={"html"}
        />
        <TwoColImgDesc
          header="Yelp Clone"
          description="I built this application with a colleague using React Native. We used Geolocation to get the users location, and passed it into the Yelp API to get the correct data."
          source={yelp}
          flipped={true}
          linkName="github"
          link="https://github.com/carr0495/mad9135-f20-p2-react-native-yelp"
          size={25}
          color={"#d92728"}
          // github={"Github"}
          // javascript={"JavaScript"}
          react={"React Native"}
          css={"CSS"}
          // html={"html"}
        />
        <TwoColImgDesc
          header="Rately PWA"
          description="I worked with a colleague to create this currency exchange Progressive Web Application. We used React JS as our framework and Materialize as our styling library. After the user navigates three times they are prompted to install the application. We deployed the application using Netlify."
          source={rately}
          // flipped={true}
          linkName="See it"
          link="https://5fc532a52f7a6b0f908b1860--jolly-hypatia-1925f8.netlify.app/"
          size={25}
          color={"purple"}
          // github={"Github + Netlify"}
          // javascript={"javascript"}
          react={"React JS"}
          // css={"CSS"}
          // html={"html"}
        />
        <TwoColImgDesc
          header="Robotic Process Automation"
          description="I worked in a team of six to learn and create a Robotic Process Automation for the Communications Security Establishment. I had the role of UX lead / Developer which required I delegate and complete tasks with my team to meet our clients requirements. Our task was to take files of varying types, and use a blacklist to redact specific information to take it from a classified state to an unclassified state."
          source={probot}
          flipped={true}
          linkName="YouTube"
          link="https://www.youtube.com/watch?v=ySIMdIWgZKg"
        />
        <TwoColImgDesc
          header="Weather Site"
          description="I built this weather application in pure JavaScript. I used three tools to complete this project: Geolocation, Google auto-complete API, and Open Weather API. First the user is asked to allow location services, once accepted the weather in their current area is shown. I  implemented dynamic backgrounds that change based on the location the user searches."
          source={weather}
          // flipped={true}
          linkName="See it"
          link="https://carr0495.github.io/mad9135-c1-html5-weather/"
          size={25}
          color={"#5f6d7b"}
          // github={"Github"}
          javascript={"JavaScript"}
          // react={"React JS"}
          css={"CSS"}
          html={"HTML"}
        />
        <TwoColImgDesc
          header="Eventi Design"
          description="For this project I was required to design an application using the full user experience design process. I defined the problem, collected data via online survey and interviews, created personas and usage scenarios then had prototype testing with a round of students. I started with a paper prototype, moved on to a wirframe in Adobe XD, and finalized the design in XD."
          source={eventi}
          flipped={true}
          linkName="Prototype"
          link="https://xd.adobe.com/view/145108c8-d8ef-4d92-b216-4dca83b3539f-4102/"
          size={25}
          color={"#e8be43"}
          adobeXD={"Adobe XD"}
        />
      </Suspense>
      <CardContainer GithubUsername={"carr0495"} />
    </>
  );
}
export default HomePage;
