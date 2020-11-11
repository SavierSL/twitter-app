import React from "react";
import "../../Styles/retweetedBox.scss";
import InnerRetweet from "../../Home/InterAction/innerRetweet";

const RetweetedBox = ({ name, userName, tweetInput, innerRt }) => {
  return (
    <>
      {name != "" ? (
        <div className="retweetContentContainer">
          <div className="retweetedBoxContainer">
            <div className="pictureRt"></div>
            <div className="retweetDetailsRt">
              <div className="userNameRt">
                <h4>
                  {name}
                  <span>{userName}</span>
                </h4>
              </div>
              <div className="retweetTextRt">
                <p>{tweetInput}</p>
              </div>
            </div>
          </div>

          {innerRt.name != "" ? (
            <InnerRetweet
              name={innerRt.name}
              userName={innerRt.userName}
              tweetInput={innerRt.tweetInput}
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RetweetedBox;
