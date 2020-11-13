import React, { useState, useRef, useEffect } from "react";
import "../Styles/tweetButtonStyles.scss";
import { CurrentAccount } from "../Data/Data";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../GlobalContext/GlobalContext";
import gsap from "gsap";

const TweetWindow = () => {
  let tweetWindowRef = useRef();
  const dispatch = useGlobalDispatchContext();
  const { tweetWindow } = useGlobalStateContext();
  const [tweetInput, setTweetInput] = useState("");
  const cloneCurrentAaccount = JSON.parse(JSON.stringify(CurrentAccount));

  const handleTweetInput = (e) => {
    setTweetInput(e.target.value);
  };
  useEffect(() => {
    if (tweetWindow) {
      gsap.to(tweetWindowRef, 0.5, { y: 10 });
    }
  }, [tweetWindow]);

  cloneCurrentAaccount.user.tweets.tweet.input = tweetInput;
  console.log(cloneCurrentAaccount);
  console.log(tweetInput);
  const handleTwetButton = () => {
    console.log("tweet");
    gsap.to(tweetWindowRef, 0.5, { y: -650, duration: 0.5 });
    dispatch({ type: "TWEET", data: cloneCurrentAaccount });
    setTimeout(() => {
      dispatch({ type: "TWEET_WINDOW" });
    }, 500);

    setTweetInput("");
  };
  const handleCloseBtn = () => {
    gsap.to(tweetWindowRef, 0.5, { y: -650, duration: 0.5 });
    setTimeout(() => {
      dispatch({ type: "TWEET_WINDOW" });
    }, 500);

    setTweetInput("");
  };
  return (
    <>
      {tweetWindow ? (
        <div
          className="tweetWindowContainer"
          ref={(el) => (tweetWindowRef = el)}
          style={{ transform: "translateY(-120%)" }}
        >
          <div className="close" onClick={handleCloseBtn}>
            close
          </div>
          <div className="tweetDetails">
            <input
              type="text"
              value={tweetInput}
              placeholder="What's happening?"
              onChange={(e) => handleTweetInput(e)}
            />
          </div>
          <button onClick={handleTwetButton}>Tweet</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TweetWindow;
