var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; 
      botRegexTw = /^\/twitch/i; botRegexSh = /^\/shrug/; 
      botRegexKms = /^\/kms/;
      botRegexSC = new RegExp("SC"); 
      botSC1 = new RegExp("starcraft"); botSC2 = new RegExp("StarCraft"); 
      botRegexMC = new RegExp("MC"); 
      botRegexHW = new RegExp("hammerwatch"); 
      botHW1 = new RegExp("Hammerwatch");
      botRegexClayton = /^\/Clayton/; 
      botRegexSleep = new RegExp("SLEEP TIGHT"); 
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexKms.test(request.text)) {
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
     else if (Math.random() < 0.9)
      postMessage("Min ur nuke is shit");
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
  
  if(request.text && botRegexSleep.test(request.text)) {
      switch (getRndInteger(0,13)) {
    case 0:
        this.res.writeHead(200);
        postMessage("http://i2.kym-cdn.com/photos/images/original/001/120/799/9fb.jpg");
        this.res.end();
        break;
    case 1:
        this.res.writeHead(200);
        postMessage("http://i0.kym-cdn.com/photos/images/original/001/104/942/fa9.png");
        this.res.end();
        break;
    case 2:
        this.res.writeHead(200);
        postMessage("https://i.groupme.com/588x793.jpeg.aaf1d37fd02a4574be3786e81693214c");
        this.res.end();
        break;
     case 3:
        this.res.writeHead(200);
        postMessage("https://i.groupme.com/501x598.png.049539f8f3874f5e9e8e7df6425ee2e6");
        this.res.end();
        break;         
     case 4:
        this.res.writeHead(200);
        postMessage("https://i.groupme.com/848x1000.jpeg.1dab63a34e824ca5a1649e5c631db590");
        this.res.end();
        break;
     case 5:
        this.res.writeHead(200);
        postMessage("https://i.groupme.com/600x582.jpeg.a9316c1310bf4950b119ee5550bfc6b7");
        this.res.end();
        break;
     case 6:
        this.res.writeHead(200);
        postMessage("https://i.groupme.com/540x559.jpeg.954ded3c508c445f82600883ea63731b");
        this.res.end();
        break;         
    case 7:
        this.res.writeHead(200);
        postMessage("http://i2.kym-cdn.com/photos/images/newsfeed/001/008/367/3a2.jpg");
        this.res.end();
        break;
    case 8:
        this.res.writeHead(200);
        postMessage("https://i.groupme.com/600x582.png.6bf9c8b4a7d74493b109f9e8ccd9d4a0");
        this.res.end();
        break;
    case 9:
        this.res.writeHead(200);
        postMessage("https://i.groupme.com/1080x1440.jpeg.b4f76593fd5144b88687a43614809dd0.large");
        this.res.end();
        break;
    case 10:
        this.res.writeHead(200);
        postMessage("https://i.groupme.com/1080x1440.jpeg.b6d460655bae4faa913a2b37134a9d78.large");
        this.res.end();
        break;
    case 11:
        this.res.writeHead(200);
        postMessage("https://i.groupme.com/750x644.jpeg.d2e4d1c11ce9474196eeb67d2cc629cc.large");
        this.res.end();
        break;
    case 12:
        this.res.writeHead(200);
        postMessage("https://i.groupme.com/739x760.jpeg.c00ced99cbf04aee96f35595f60c7aa3.large");
        this.res.end();
        break;
}
   
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
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
exports.respond = respond;
