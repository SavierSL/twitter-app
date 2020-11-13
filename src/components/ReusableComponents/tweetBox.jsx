import React from "react";
import RetweetedBox from "../Home/InterAction/retweetedBox";
import "../Styles/profileTweetStyles.scss";

const TweetBox = ({ name, userName, tweetInput, retweetBox, innerRt }) => {
  return (
    <>
      <div className="mainTweet">
        <div className="tweetContent">
          <div className="picture"></div>
          <div className="tweetDetails">
            <div className="userName">
              <h4>
                {name} <span>{userName}</span>
              </h4>
            </div>
            <div className="tweetText">
              <p>{tweetInput}</p>
            </div>
          </div>
        </div>
        <div className="rt">
          {retweetBox.name != "" ? (
            <RetweetedBox
              name={retweetBox.name}
              userName={retweetBox.userName}
              tweetInput={retweetBox.tweetInput}
              innerRt={innerRt}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default TweetBox;
