import React, { useState, useRef, useEffect } from "react";
import "../../Styles/msgStyles.scss";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../GlobalContext/GlobalContext";
import { CurrentAccount } from "../../Data/Data";
import MsgRetweetedBox from "../InterAction/msgRetweetedBox";
import gsap from "gsap";

const MsgBox = () => {
  let msgBoxRef = useRef(null);
  const [reply, setReply] = useState("");
  const { msg, data } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const handleCloseMsg = () => {
    console.log("close");
    setReply("");

    gsap.to(msgBoxRef, 0.3, {
      y: -650,
      duration: 0.5,
    });
    setTimeout(() => {
      dispatch({ type: "MSG" });
    }, 300);
  };
  let tweet = null;
  if (msg.condition) {
    tweet = data.filter((user) => user.user.id === msg.data);
  }
  useEffect(() => {
    if (msg.condition) {
      gsap.fromTo(
        msgBoxRef,
        0.5,
        {
          y: -800,
        },
        {
          y: 0,
          duration: 0.5,
        }
      );
    }
  }, [msg.condition]);

  const replyData = { userName: CurrentAccount.user.userName, reply: reply };
  const handleReplyBtn = () => {
    console.log("reply");
    // dispatch({ type: "CLICK_REPLY" });
    const newMessage = tweet[0].user.message;
    newMessage.push(replyData);
    console.log(newMessage);
    setReply("");
    gsap.to(msgBoxRef, 0.3, {
      y: -650,
      duration: 0.5,
    });
    setTimeout(() => {
      dispatch({ type: "MSG" });
    }, 300);
  };
  const handleInput = (e) => {
    e.preventDefault();
    setReply(e.target.value);
  };
  return (
    <>
      {msg.condition ? (
        <div
          className="msgBox"
          ref={(el) => (msgBoxRef = el)}
          style={{ transform: "translateY(-800%)" }}
        >
          <div className="close" onClick={handleCloseMsg}>
            close
          </div>
          <div className="msgContainer">
            <div className="tweet">
              <div className="picture"></div>
              <div className="tweetDetails">
                <div className="userName">
                  <h4>
                    {tweet[0].user.name} <span> {tweet[0].user.userName}</span>
                  </h4>
                </div>
                <div className="tweetText">
                  <p>{tweet[0].user.tweets.tweet.input}</p>
                </div>
              </div>
            </div>
            {tweet[0].user.retweet.name != "" ? (
              <div className="rtmsgContainer">
                <MsgRetweetedBox
                  name={tweet[0].user.retweet.name}
                  userName={tweet[0].user.retweet.userName}
                  tweetInput={tweet[0].user.retweet.tweetInput}
                  innerRt={tweet[0].user.innerRetweet}
                />
              </div>
            ) : (
              ""
            )}

            <div className="replying">
              <p>
                replying to <span>{tweet[0].user.userName}</span>
              </p>
            </div>
            <div className="replyBox">
              <div className="pictureOfUser"></div>
              <div className="msgDetails">
                <input
                  type="text"
                  placeholder="Tweet your reply"
                  value={reply}
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </div>
          </div>
          <div className="reply">
            <button onClick={handleReplyBtn}>Reply</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MsgBox;
