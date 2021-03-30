import React, { useEffect, useState } from "react";
import "./CardContainer.css";
import { CircleImage } from "./";
import { fetchGithubProfile } from "../services";
import { VscGithub } from "react-icons/vsc";

function openGithub(Link) {
  window.open(Link, "blank");
}

function CardContainer(props) {
  let [user, setUser] = useState();

  useEffect(() => {
    fetchGithubProfile(props.GithubUsername)
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch(console.log);
  }, []);

  if (user == null) {
    return <h1>loading</h1>;
  } else {
    return (
      <div className="cardContainer">
        <div
          className="image_background"
          //   style={{
          //     backgroundImage: `url("https://source.unsplash.com/100x150/?red")`,
          //   }}
        ></div>
        <div className="contentBox">
          <div className="headerContainer">
            <CircleImage src={user.avatar_url} circleSize={"50px"} />
            <h2>{user.name}</h2>
          </div>

          <div className="companyLabel">
            <div className="company_location">
              <h4>{user.company}</h4>
              <p>{user.location}</p>
            </div>

            <VscGithub
              className="githubLogo"
              size={"30px"}
              color={"purple"}
              onClick={() => openGithub(user.html_url)}
            />
          </div>
          <p>{user.bio}</p>
          <h4 className="userName">{user.login}</h4>
          <div className="followers_box">
            <p>{`Followers: ${user.followers}`}</p>
            <p>{`Following: ${user.following}`}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default CardContainer;
