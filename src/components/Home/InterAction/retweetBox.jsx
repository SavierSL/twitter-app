import React from "react";
import "../../Styles/retweetBox.scss";
import InnerRetweet from "../../Home/InterAction/innerRetweet";

const RetweetBox = ({ allData }) => {
  const newRtData = allData[0];
  console.log(newRtData);
  return (
    <>
      <div className="retweetBox">
        <div className="tweetContent">
          <div className="picture"></div>
          <div className="tweetDetails">
            <div className="userName">
              <h4>
                {newRtData.user.name}
                <span>{newRtData.user.userName}</span>
              </h4>
            </div>
            <div className="tweetText">{newRtData.user.tweets.tweet.input}</div>
          </div>
        </div>
        {newRtData.user.retweet.name != "" ? (
          <InnerRetweet
            name={newRtData.user.retweet.name}
            userName={newRtData.user.retweet.userName}
            tweetInput={newRtData.user.retweet.tweetInput}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default RetweetBox;
