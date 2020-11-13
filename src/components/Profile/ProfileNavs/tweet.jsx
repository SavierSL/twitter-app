import React, { useEffect } from "react";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../GlobalContext/GlobalContext";
import { CurrentAccount } from "../../Data/Data";
import TweetBox from "../../ReusableComponents/tweetBox";
import "../../Styles/tweetStyles.scss";
import InteractBtn from "../../ReusableComponents/interactButton";

const Tweet = () => {
  const { data } = useGlobalStateContext();
  const currentUserName = CurrentAccount.user.userName;
  const datas = data.filter((item) => {
    return item.user.userName === currentUserName;
  });

  console.log(data[0].user.userName);
  console.log(currentUserName === data[0].user.userName);
  return (
    <>
      {datas.map((item) => {
        return (
          <div className="tweetBoxContainer">
            <TweetBox
              name={item.user.name}
              userName={item.user.userName}
              tweetInput={item.user.tweets.tweet.input}
              retweetBox={item.user.retweet}
              innerRt={item.user.innerRetweet}
            />
            <InteractBtn />
          </div>
        );
      })}
    </>
  );
};

export default Tweet;
