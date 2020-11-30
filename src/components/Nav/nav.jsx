import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/navStyles.scss";
import TweetWindow from "../Nav/tweetButton";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../GlobalContext/GlobalContext";
import TwitterLogo from "../Assets/Images/twitterLogo.png";

const Links = [
  { name: "Home", link: "/" },
  { name: "Notif", link: "/notif" },
  { name: "Messages", link: "/messages" },
  { name: "Bookmark", link: "/bookmark" },
  { name: "Profile", link: "/profile" },
];
const Nav = () => {
  const dispatch = useGlobalDispatchContext();
  const { tweetWindow } = useGlobalStateContext();
  const handleTweetButton = () => {
    dispatch({ type: "TWEET_WINDOW" });
  };
  console.log(tweetWindow);
  return (
    <>
      <TweetWindow />
      <div className="navContainerBtns">
        <div className="logo">
          <img src={TwitterLogo} alt="" />
        </div>
        <div className="navBtnContainer">
          <ul>
            {Links.map((link, index) => {
              return (
                <li key={index}>
                  {link.name === "Profile" ? (
                    <NavLink
                      activeStyle={{ color: "rgb(99, 200, 240)" }}
                      key={index}
                      to={link.link}
                    >
                      {link.name}
                    </NavLink>
                  ) : (
                    <NavLink
                      exact
                      activeStyle={{ color: "rgb(99, 200, 240)" }}
                      key={index}
                      to={link.link}
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              );
            })}
            <button className="tweet" onClick={handleTweetButton}>
              Tweet
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
