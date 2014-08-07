// filter an array of tweets by a given hashtag, return the filtered tweets in an array

module.exports = function(hashtag, tweets, cb) {
  filteredTweets = [];
  tweets.forEach(function(tweet) {
    if (tweet.content.toLowerCase().indexOf(hashtag.toLowerCase()) > -1) {
      filteredTweets.push(tweet);
    }
    cb(null, filteredTweets);
  });
};

// TESTED =================================

if(process.argv[1] === __filename) {
  var hashtag = '#firstworldproblems';
  var tweets = [{
      username: 'dave',
      content: 'I have a lot of #firstworldproblems'
    },
    {
      username: 'zach',
      content: 'not me!'
    }];

  module.exports(hashtag, tweets, function(err, data) {
      if(err) return console.error(err);
      console.log(data[0].username === 'dave');
      process.reallyExit();
  });
}