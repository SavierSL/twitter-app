import React, { createContext, useReducer, useContext } from "react";
import { NewsFeedData, CurrentAccount } from "../Data/Data";

// define Context
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

// define Reducer
export const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MODE": {
      return { ...state, mode: action.mode };
    }
    case "TWEET": {
      return { ...state, data: [action.data, ...state.data] };
    }
    case "RETWEET": {
      return {
        ...state,
        retweetDatas: [action.data, ...state.retweetDatas],
        retweet: true,
      };
    }
    case "CLOSE_RETWEET": {
      return { ...state, retweet: false };
    }
    case "CLICK_RETWEET": {
      return { ...state, data: [action.data, ...state.data] };
    }
    case "HEART": {
      return { ...state, data: action.data };
    }
    case "RETWEETQT": {
      return { ...state, data: action.data };
    }
    case "MSG": {
      return {
        ...state,
        msg: { condition: !state.msg.condition, data: action.data },
      };
    }
    case "TWEET_WINDOW": {
      return { ...state, tweetWindow: !state.tweetWindow };
    }

    default: {
      throw new Error(`Invalid: ${action.type}`);
    }
  }
};

// define Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    mode: "night",
    data: NewsFeedData,
    currentAccount: CurrentAccount,
    retweet: null,
    retweetDatas: [],
    msg: {
      condition: false,
      data: null,
    },
    tweetWindow: false,
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

// define custom Hooks
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
