var HTTPS = require('https');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexAncap = new RegExp("ancap|Ancap"); 
      botRegexDildo = new RegExp("dildo|Dildo");
      botRegexStatSheet = new RegExp("stat sheet"|"Stat sheet"|"STAT SHEET");
                                     
    if(request.text && botRegexStatSheet.test(request.text)) {
          switch (getRndInteger(0,2)) {
    case 0:
        this.res.writeHead(200);
        postMessage("DID SOMEBODY SAY STAT SHEET!!!!!?!?!?!?!?!?!?!");
        this.res.end();
              this.res.writeHead(200);
               postMessage("*FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP**FAP*");
              this.res.end();
        break;
          }     
    }                          
  
  
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

