export const NewsFeedData = [
  {
    user: {
      id: Math.random(),
      name: "Lucy",
      userName: "@LucyHeart",
      tweets: {
        tweet: {
          input: "Welcome to my simple twitter web app",
          time: new Date(),
          hearts: 0,
          retweets: 0,
          messages: [],
        },
      },
      retweetQt: 0,
      hearts: 0,
      retweets: 0,
      message: [],
      likes: [],
      followers: [],
      following: [],
      retweet: {
        name: "",
        userName: "",
        tweetInput: "",
      },
      innerRetweet: {
        name: "",
        userName: "",
        tweetInput: "",
      },
    },
  },
];
export const CurrentAccount = {
  user: {
    id: Math.random(),
    name: "Save",
    userName: "@SaveMo",
    tweets: {
      tweet: {
        input: "Hello",
        time: new Date(),
        hearts: 0,
        retweets: 0,
        messages: [],
      },
    },
    retweetQt: 0,
    hearts: 0,
    message: [],
    likes: [],
    followers: [],
    following: [],
    retweet: {
      name: "",
      userName: "",
      tweetInput: "",
    },
    innerRetweet: {
      name: "",
      userName: "",
      tweetInput: "",
    },
  },
};
