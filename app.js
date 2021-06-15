//start.js
//const readlineSync = require('readline-sync');
const Readline = require('readline')
var colors = require('colors')
const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
const matcher = require('./matcher');
const weather = require('./weather');
//var i =Number(readlineSync.question('Need number !'))

function isEmpty(obj){
  for (var key in obj){
    if(obj.hasOwnProperty(key)){
      return false;
    }
  }
  return true;
}

rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
  matcher(reply, cb => {
    if(isEmpty(cb)){
      console.log("I can't understand what you said");
    }
    else{
      if(cb.intent==="Hello"){
          console.log(`${cb.entities.greeting}`);
      }
	  if(cb.intent==="Current Weather"){
		  console.log(`Current Weather, `.green);
	  }
	  if(cb.intent==="Tommorow"){
		  console.log(`Tommorow, `.green);
	  }
	  if(cb.intent==="Two days"){
		  console.log(`In two days, `.green);
	  }
      if(cb.intent!=="Hello" & cb.intent!=="Exit" ){
		  if(parseInt(weather.temp)<15){
			  console.log(`it's ${weather.temp} degrees in
                 ${cb.entities.city}, so cold...`.blue);
		  }
		  else{
			  console.log(`it's ${weather.temp} degrees in
                 ${cb.entities.city}, so hot...`.red);
		  }
		  
	  }
      if(cb.intent==="Exit"){
        process.exit()
      }
    }
  })
});