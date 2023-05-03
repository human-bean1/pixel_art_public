var twit = require('twit');
var config = require('./config.js');
var T = new twit(config);

const p5 = require('node-p5');

// Requiring fs module in which
// writeFile function is defined.
const fs = require('fs')

//  search twitter for all tweets containing the word 'dream' since July 11, 2011

let string1; 

T.get('search/tweets', { q: 'dreaming since:2011-07-11', count: 5 }, function(err, data, response) {

  console.log(data.statuses[0].created_at); 
  console.log(data.statuses[0].user.location);
  console.log(data.statuses[0].text); 

  string1 = data.statuses[0].text; 
    
  newData = JSON.stringify(data);
  // Write data in 'Output.txt' .
  //fs.appendFile('Output.txt', '\n'+string1, (err) => {
  fs.writeFileSync('Output.json', newData, (err) => {
        
    // In case of a error throw err.
    if (err) throw err;
  })

})



// var retweet = function() {

//     //1. GET RECENT TWEETS
//     T.get('search/tweets', { q: '#tesla since:2020-04-15', count: 100 }, function(err, data, response) {
//       const tweets = data.statuses
//       // .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
//       .map(tweet => tweet.text)
//       .filter(tweet => tweet.toLowerCase().includes('elon'));
//       console.log(tweets);
//     })

//   }

