import React, { useState, useEffect } from "react";
import "../Styles/newsFeedStyles.scss";
import NewsFeedBox from "../Home/newsFeedJSX";
import { NewsFeedData } from "../Data/Data";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../GlobalContext/GlobalContext";

const NewsFeed = () => {
  const { data } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const { currentAccount } = useGlobalStateContext();
  const { user } = currentAccount;
  const [newTweet, setNewTweet] = useState("");
  const tweets = {
    user: {
      id: Math.random(),
      name: user.name,
      userName: user.userName,
      tweets: {
        tweet: {
          input: newTweet,
          time: new Date(),
          hearts: user.tweets.tweet.hearts,
          retweets: user.tweets.tweet.retweets,
          messages: user.tweets.tweet.messages,
        },
      },
      retweetQt: user.retweetQt,
      hearts: user.hearts,
      message: user.message,
      likes: user.likes,
      followers: user.followers,
      following: user.following,
      retweet: {
        name: user.retweet.name,
        userName: user.retweet.userName,
        tweetInput: user.retweet.tweetInput,
      },
      innerRetweet: {
        name: user.innerRetweet.tweetInput,
        userName: user.innerRetweet.tweetInput,
        tweetInput: user.innerRetweet.tweetInput,
      },
    },
  };

  const handleTweet = (e) => {
    e.preventDefault();
    dispatch({ type: "TWEET", data: tweets });
    setNewTweet("");
  };

  console.log(data);
  return (
    <>
      <div className="homeLogo">
        <h2>Home</h2>
        <h2>Night.</h2>
      </div>
      <div className="newsFeedContainer">
        <div className="shareBox">
          <div className="picture"></div>
          <div className="tweetContainer">
            <div className="inputTweet">
              <input
                className="shareInput "
                type="text"
                placeholder="What's happening?"
                value={newTweet}
                onChange={(e) => setNewTweet(e.target.value)}
              />
            </div>
            <div className="iconsBox">
              <div className="icons">
                <ul>
                  <li>IMG</li>
                  <li>GIF</li>
                  <li>VOTE</li>
                  <li>EMOJI</li>
                </ul>
              </div>
              <div className="tweetBtn">
                <form action="" onSubmit={handleTweet}>
                  <button className="tweet">Tweet</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="newsFeeds">
          {data.map((allData) => {
            return (
              <NewsFeedBox
                key={allData.user.id}
                id={allData.user.id}
                allData={allData}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewsFeed;
