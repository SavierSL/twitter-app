import React, { useState, useRef, useEffect } from "react";
import "../../Styles/retweet.scss";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../../GlobalContext/GlobalContext";
import NewsFeedJSX from "../newsFeedJSX";
import RetweetBox from "../InterAction/retweetBox";
import gsap from "gsap/gsap-core";
const Retweet = () => {
  let retweetRef = useRef(null);
  const dispatch = useGlobalDispatchContext();
  const {
    retweet,
    currentAccount,
    retweetDatas,
    data,
  } = useGlobalStateContext();
  const newRetweet = retweet ? retweetDatas[0] : "";
  const { user } = currentAccount;

  // input value
  const [comment, setComment] = useState("");
  console.log(newRetweet);
  const retweetData = {
    user: {
      id: Math.random(),
      name: user.name,
      userName: user.userName,
      tweets: {
        tweet: {
          input: comment,
          time: new Date(),
          hearts: user.tweets.tweet.hearts,
          retweets: user.tweets.tweet.retweets,
          messages: user.tweets.tweet.messages,
        },
      },
      retweetQt: user.retweetQt,
      hearts: user.hearts,
      message: [],
      likes: user.likes,
      followers: user.followers,
      following: user.following,
      retweet: {
        name: retweet ? newRetweet[0].user.name : "",
        userName: retweet ? newRetweet[0].user.userName : "",
        tweetInput: retweet ? newRetweet[0].user.tweets.tweet.input : "",
      },
      innerRetweet: {
        name: retweet ? newRetweet[0].user.retweet.name : "",
        userName: retweet ? newRetweet[0].user.retweet.userName : "",
        tweetInput: retweet ? newRetweet[0].user.retweet.tweetInput : "",
      },
    },
  };
  console.log(retweet ? newRetweet[0].user.retweet.name : "");
  const handleClose = () => {
    gsap.to(retweetRef, 0.5, { y: -800 });
    setTimeout(() => {
      dispatch({ type: "CLOSE_RETWEET" });
      setComment("");
    }, 500);
  };

  const handleRetweet = () => {
    // find the same id for rt qt
    const newRtData = data.filter(
      (item) => item.user.id === retweetDatas[0][0].user.id
    );
    retweetDatas[0][0].user.retweetQt++;
    data.forEach((item) => {
      if (item.user.id === newRtData[0].user.id) {
        item = newRtData[0];
      }
    });

    console.log(retweetDatas);
    console.log(retweetDatas[0][0]);
    console.log(newRtData);
    gsap.to(retweetRef, 0.5, { y: -800 });
    setTimeout(() => {
      dispatch({ type: "RETWEETQT", data: data });
      dispatch({ type: "CLICK_RETWEET", data: retweetData });
      dispatch({ type: "CLOSE_RETWEET" });
      setComment("");
    }, 500);
  };
  useEffect(() => {
    if (retweet) {
      gsap.fromTo(retweetRef, 0.5, { y: -800 }, { y: 0 });
    }
  }, [retweet]);
  return (
    <>
      {retweet ? (
        <>
          <div
            className="retweetContainer"
            ref={(el) => (retweetRef = el)}
            style={{ transform: "translateY(-800%)" }}
          >
            <div className="close" onClick={handleClose}>
              close
            </div>
            <div className="retweetDetails">
              <div className="picture"></div>
              <div className="tweetContainer">
                <div className="inputTweet">
                  <input
                    className="shareInput "
                    type="text"
                    placeholder="Add a Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="retweetContent">
              <RetweetBox allData={newRetweet} />
            </div>
            <button className="rtBtn" onClick={handleRetweet}>
              Retweet
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Retweet;
