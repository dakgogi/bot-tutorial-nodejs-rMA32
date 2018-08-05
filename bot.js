var HTTPS = require('https');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexAncap = new RegExp("ancap|Ancap"); 
      botRegexDildo = new RegExp("dildo|Dildo");
  
  
  if(request.text && botRegexAncap.test(request.text)) {
      switch (getRndInteger(0,2)) {
    case 0:
        this.res.writeHead(200);
        postMessage("Government regulation is necessary for a strong economy");
        this.res.end();
        break;
    case 1:
        this.res.writeHead(200);
        postMessage("Having a European superstate seems like a good idea");
        this.res.end();
        break;
}
   
  } 
  else if(request.text && botRegexDildo.test(request.text)) {
   switch (getRndInteger(0,2)) {
    case 0:
        this.res.writeHead(200);
        postMessage("It's for personal use");
        this.res.end();
        break;
    case 1:
        this.res.writeHead(200);
        postMessage("Differentiating your business dildo and your personal dildo is very important");
        this.res.end();
        break;
  } 
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

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

exports.respond = respond;

