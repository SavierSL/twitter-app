import React from "react";
import Nav from "../src/components/Nav/nav";
import Search from "../src/components/Search/searchNav";
import NewsFeed from "../src/components/Home/newsFeed";
import Retweet from "../src/components/Home/InterAction/retweet";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "../src/components/Profile/profile";
import MsgBox from "../src/components/Home/InterAction/msg";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MsgBox />

        <Retweet />

        <Switch>
          <Route exact path="/">
            <NewsFeed />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Nav />
        <Search />
      </BrowserRouter>
    </>
  );
};

export default App;
