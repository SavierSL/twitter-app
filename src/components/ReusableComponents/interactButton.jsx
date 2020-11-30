import React from "react";
import "../Styles/interActBtnStyles.scss";
import heartIcon from "../Assets/BtnImages/heart.png";
import message from "../Assets/BtnImages/msg.png";
import retweet from "../Assets/BtnImages/retweet.png";

const InteractBtn = ({
  msg,
  retweetQt,
  hearts,
  handleMsg,
  handleRetweet,
  handleHeart,
  user,
}) => {
  return (
    <>
      <div className="interactBtn">
        <ul>
          <li onClick={handleMsg}>
            <img src={message} alt="" />
            <span>{msg}</span>
          </li>
          <li onClick={handleRetweet}>
            <img className="retweetBtn" src={retweet} alt="" />
            <span>{retweetQt}</span>
          </li>
          <li onClick={handleHeart}>
            <img src={heartIcon} alt="" /> <span>{hearts}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default InteractBtn;
