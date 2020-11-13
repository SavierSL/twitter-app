import React from "react";
import "../Styles/interActBtnStyles.scss";

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
            msg <span>{msg}</span>
          </li>
          <li onClick={handleRetweet}>
            retweet <span>{retweetQt}</span>
          </li>
          <li onClick={handleHeart}>
            heart <span>{hearts}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default InteractBtn;
