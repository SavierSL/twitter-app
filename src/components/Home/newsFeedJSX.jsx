import React from "react";
import "../Styles/newsFeedJSXStyles.scss";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../GlobalContext/GlobalContext";
import RetweetedBox from "../Home/InterAction/retweetedBox";

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
          <div className="mainTweet" onClick={handleMainTweet}>
            <div className="tweetContent">
              <div className="picture"></div>
              <div className="tweetDetails">
                <div className="userName">
                  <h4>
                    {user.name} <span>{user.userName}</span>
                  </h4>
                </div>
                <div className="tweetText">
                  <p>{tweets.tweet.input}</p>
                </div>
              </div>
            </div>
            <div className="rt">
              {user.retweet.name != "" ? (
                <RetweetedBox
                  name={user.retweet.name}
                  userName={user.retweet.userName}
                  tweetInput={user.retweet.tweetInput}
                  innerRt={user.innerRetweet}
                />
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="interactBtn">
            <ul>
              <li onClick={handleMsg}>
                msg <span>{user.message.length}</span>
              </li>
              <li onClick={handleRetweet}>
                retweet <span>{user.retweetQt}</span>
              </li>
              <li onClick={handleHeart}>
                heart <span>{user.hearts}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsFeedBox;
