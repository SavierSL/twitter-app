import React from "react";
import "../../Styles/innerRetweet.scss";
const InnerRetweet = ({ name, userName, tweetInput }) => {
  return (
    <>
      <div className="retweetContent">
        <div className="innerRtContainer">
          <div className="picture"></div>
          <div className="rtContent">
            <div className="userName">
              <h4>
                {name}
                <span>{userName}</span>
              </h4>
            </div>
            <p>{tweetInput}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerRetweet;
