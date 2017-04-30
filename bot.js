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
      botRegexClayton = /^\/Clayton/; 
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexKys.test(request.text)) {
    this.res.writeHead(200);
    if (Math.random() < 0.5)
      postMessage("http://www.wikihow.com/Tie-a-Noose");
    else
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
      postMessage("Fuckkk I haven't studied a lick of bio")
    else if (Math.random() < 0.3)
      postMessage("Go step on some legos")
    else if (Math.random() < 0.4)
      postMessage("I'm heading back to Athens -0-")
    else if (Math.random() < 0.5)
      postMessage("I'm waiting for the bus")
     else if (Math.random() < 0.6)
      postMessage("I'm going out with some friends tonight lol")
     else if (Math.random() < 0.7)
      postMessage("Sorry guys I have an exam on monday")
     else if (Math.random() < 0.8)
      postMessage("gg I have to go tutor")
     else if (Math.random() < 0.9)
      postMessage("I have to go eat with my parents")
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
    postMessage("You guys take minecraft too seriously");
    this.res.end();
   }
  else {
    console.log("Nani the fuck did you just fucking iimasu about watashi, you chiisai bitch desuka? Watashi’ll have anata know that watashi graduated top of my class in Nihongo 3, and watashi’ve been involved in iroirona Nihongo tutoring sessions, and watashi have over sanbyaku perfect test scores. Watashi am trained in kanji, and watashi is the top letter writer in all of southern California. Anata are nothing to watashi but just another weaboo. Watashi will korosu anata the fuck out with vocabulary the likes of which has never been mimasu’d before on this continent, mark watashino fucking words. Anata thinks anata can get away with hanashimasing that kuso to watashi over the intaaneto? Omou again, fucker. As we hanashimasu, watashi am contacting watashino secret netto of otakus across the USA, and anatano IP is being traced right now so you better junbishimasu for the ame, ujimushi. The ame that korosu’s the pathetic chiisai thing anata calls anatano life. You’re fucking shinimashita’d, akachan.");
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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
