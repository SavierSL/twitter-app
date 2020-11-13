import React from "react";
import "../Styles/newsFeedJSXStyles.scss";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../GlobalContext/GlobalContext";
import RetweetedBox from "../Home/InterAction/retweetedBox";
import TweetBox from "../ReusableComponents/tweetBox";
import InteractBtn from "../ReusableComponents/interactButton";

const NewsFeedBox = ({ allData, id }) => {
  // props
  const { user } = allData;
  const { tweets } = user;
  //globalContext
  const { data } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  // handle Retweet
  const handleRetweet = () => {
    const retweetItem = data.filter((data) => data.user.id === id);
    console.log(retweetItem);
    dispatch({ type: "RETWEET", data: retweetItem });
  };

  const handleHeart = () => {
    // find the same id
    const heartItem = data.filter((data) => data.user.id === id);
    // increment heart
    heartItem[0].user.hearts++;
    console.log(heartItem[0]);
    // copy the data
    const newData = data;
    console.log(newData);
    newData.forEach((item, index) => {
      if (item.id === heartItem[0].id) {
        item = heartItem[0];
      }
    });
    console.log(newData);
    dispatch({ type: "HEART", data: newData });
  };
  console.log(data);
  const handleMsg = () => {
    console.log("msg");
    dispatch({ type: "MSG", data: user.id });
  };
  const handleMainTweet = () => {
    console.log("mainTweet");
  };
  return (
    <>
      <div className="mainNfContainer">
        <div className="nfContainer">
          <TweetBox
            name={user.name}
            userName={user.userName}
            tweetInput={tweets.tweet.input}
            retweetBox={user.retweet}
            innerRt={user.innerRetweet}
          />
          <InteractBtn
            msg={user.message.length}
            retweetQt={user.retweetQt}
            hearts={user.hearts}
            handleMsg={handleMsg}
            handleRetweet={handleRetweet}
            handleHeart={handleHeart}
            user={user}
          />
        </div>
      </div>
    </>
  );
};

export default NewsFeedBox;
