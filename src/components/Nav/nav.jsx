import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/navStyles.scss";
const Links = [
  { name: "Home", link: "/" },
  { name: "Notif", link: "/notif" },
  { name: "Messages", link: "/messages" },
  { name: "Bookmark", link: "/bookmark" },
  { name: "Profile", link: "/profile" },
];
const Nav = () => {
  return (
    <>
      <div className="navContainerBtns">
        <div className="logo">
          <h1>Twitter</h1>
        </div>
        <div className="navBtnContainer">
          <ul>
            {Links.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink
                    exact
                    activeStyle={{ color: "rgb(99, 200, 240)" }}
                    key={index}
                    to={link.link}
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
            <button className="tweet">Tweet</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
