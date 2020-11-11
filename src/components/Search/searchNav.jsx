import React from "react";
import "../Styles/searchStyles.scss";
const Search = () => {
  return (
    <>
      <div className="searchContainer">
        <div className="searchBox">
          <input
            className="search"
            type="search"
            placeholder="Search Twitter"
          />
        </div>
        <div className="searchTrends">
          <h3>Trends for you</h3>
        </div>
        <div className="hashtags">
          <div className="hashtag">
            <p>Trending worldwide</p>
            <h3>#BreakingNews</h3>
            <div className="hashTagContent">
              <div className="details">
                {" "}
                <p className="topic">Space</p>
                <p className="topicDetails">Lorem ipsum dolor sit amet</p>
              </div>
              <div className="pictureHt"></div>
            </div>
            <p className="tweetQt">1 million people are Tweeting </p>
          </div>
        </div>
        <div className="hashtags">
          <div className="hashtag">
            <p>Trending worldwide</p>
            <h3>#BreakingNews</h3>
            <div className="hashTagContent">
              <div className="details">
                {" "}
                <p className="topic">Space</p>
                <p className="topicDetails">Lorem ipsum dolor sit amet</p>
              </div>
              <div className="pictureHt"></div>
            </div>
            <p className="tweetQt">1 million people are Tweeting </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
