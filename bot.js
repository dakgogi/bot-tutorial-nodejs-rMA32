var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; 
      botRegexTw = /^\/twitch/i; botRegexSh = /^\/shrug/; 
      botRegexKys = /^\/kys/;
      botRegexSC = new RegExp("SC"); 
      botSC1 = new RegExp("starcraft"); botSC2 = new RegExp("StarCraft"); 
      botRegexMC = new RegExp("MC"); 
      botRegexHW = new RegExp("hammerwatch"); 
      botHW1 = new RegExp("Hammerwatch");
      botRegexClayton = /^\/Clayton/; 
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexKys.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://imgur.com/gallery/k1Ofl"); 
    this.res.end();
  } 
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text) || botSC1.test(request.text) || botSC2.test(request.text)) {
    this.res.writeHead(200);
    if (Math.random() < 0.1)
      postMessage("Sorry my dog has testicular cancer");
    else if (Math.random() < 0.2)
      postMessage("Fuckkk I haven't studied a lick of bio");
    else if (Math.random() < 0.3)
      postMessage("Go step on some legos");
    else if (Math.random() < 0.4)
      postMessage("I'm heading back to Athens -0-");
    else if (Math.random() < 0.5)
      postMessage("I'm waiting for the bus");
     else if (Math.random() < 0.6)
      postMessage("I'm going out with some friends tonight lol");
     else if (Math.random() < 0.7)
      postMessage("Sorry guys I have an exam on monday");
     else if (Math.random() < 0.8)
      postMessage("gg I have to go tutor");
     else if (Math.random() < 0.85)
      postMessage("I have to go eat with my parents");
     else
      postMessage("Sorry I'm going to the gym");
    this.res.end();
  } 
  else if(request.text && botRegexClayton.test(request.text)) { 
    this.res.writeHead(200);
    postMessage("https://imgur.com/gallery/qOOvz");
  this.res.end();
  } 
   else if(request.text && botRegexMC.test(request.text)) {
    this.res.writeHead(200);
    if (Math.random() < 0.2)
     postMessage("You guys take minecraft too seriously");
     else if (Math.random() < 0.4)
       postMessage("My desktop is home now lmao, laptop will implode");
     else if (Math.random() < 0.6)
       postMessage("I have to go to church");
     else if (Math.random() < 0.8) 
       postMessage("At IHOP");
    else
      postMessage("DIE ALREADY");
    this.res.end();
   }
   else if(request.text && botRegexHW.test(request.text) || botHW1.test(request.text)) { 
    this.res.writeHead(200);
    postMessage("level 3 armor store kreygasm");
    this.res.end();
  } 
  else {
    console.log("Something broke :(");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}
/*
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.respond = respond;
