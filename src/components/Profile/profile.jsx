import React from "react";
import "../Styles/profileStyles.scss";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import Tweets from "../Profile/ProfileNavs/tweet";

const Profile = () => {
  return (
    <>
      <div className="profileContainer">
        <div className="profileBanner">
          <h3>Save</h3>
        </div>
        <div className="pictureProf"></div>
        <div className="profileContent">
          <div className="profileDetails">
            <div className="background"></div>

            <div className="profileBio">
              <div className="editBioContainer">
                <button>Edit Profile</button>
              </div>
              <div className="nameContainer">
                <h2>save</h2>
                <p>@SaveMo</p>
              </div>
              <div className="bioDetailsContainer">
                <p>Front end developer</p>
              </div>
              <div className="aboutContainer">
                <p>Naga</p>
                <p>Born September 18, 1998</p>
                <p>Joined 2020</p>
              </div>
              <div className="followersContainer">
                <p>
                  1 <span>Following</span>
                </p>
                <p>
                  548k <span>Followers</span>
                </p>
              </div>
              <div className="profileNavBars">
                <NavLink to="/profile">
                  <h4>Tweets</h4>
                </NavLink>
                <NavLink to="/profile/tweetsandreplies">
                  <h4>Tweets &amp; Replies</h4>
                </NavLink>
                <NavLink to="/profile/media">
                  <h4>Media</h4>
                </NavLink>
                <NavLink to="/profile/likes">
                  <h4>Likes</h4>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="profileNewsFeedContainer">
            <Route exact path="/profile">
              <Tweets />
            </Route>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
